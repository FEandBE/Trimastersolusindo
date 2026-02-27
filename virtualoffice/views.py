from django.shortcuts import render, get_object_or_404
from .models import Paket, RuangRapat, Coworking,Order,Promo
from django.http import JsonResponse
from decimal import Decimal
from django.utils import timezone

def home(request):
    paket_list = Paket.objects.filter(aktif=True)
    coworking_list = Coworking.objects.filter(aktif=True)
    ruang_list = RuangRapat.objects.filter(aktif=True)

    return render(request, 'profile/home.html', {
        'paket_list': paket_list,
        'coworking_list': coworking_list,
        'ruang_list': ruang_list
    })

def coworking_list(request):
    coworking_list = Coworking.objects.filter(aktif=True)
    return render(request, 'product_list/coworking.html', {'coworking_list': coworking_list})


def coworking_detail(request, slug):
    space = get_object_or_404(Coworking, slug=slug, aktif=True)
    # Ambil 3 ruangan lain untuk rekomendasi di bawah
    spaces_lainnya = Coworking.objects.filter(aktif=True).exclude(id=space.id)[:3]
    
    return render(request, 'product_detail/coworking_detail.html', {
        'space': space,
        'spaces_lainnya': spaces_lainnya
    })


def ruang_rapat(request):
    rooms = RuangRapat.objects.filter(aktif=True)
    return render(request, 'product_list/meeting_rooms.html', {'rooms': rooms})

def ruang_rapat_detail(request, slug):
    room = get_object_or_404(RuangRapat, slug=slug, aktif=True)
    ruang_lainnya = RuangRapat.objects.filter(aktif=True).exclude(slug=slug)

    return render(request, 'product_detail/meeting_room_detail.html', {
        'room': room,
        'ruang_lainnya': ruang_lainnya
    })


def testimonial(request):
    return render(request, 'testimonial.html')


def kontak(request):
    return render(request, 'profile/contact.html')

def tentang(request):
    return render(request, 'profile/about.html')

def detail_paket(request, slug):
    paket = get_object_or_404(Paket, slug=slug, aktif=True)
    paket_lainnya = Paket.objects.filter(aktif=True)

    return render(request, 'product_detail/package_detail.html', {
        'paket': paket,
        'paket_lainnya': paket_lainnya
    })


def daftar_paket(request):
    paket_list = Paket.objects.filter(aktif=True)
    return render(request, 'product_list/package_list.html', {'paket_list': paket_list})


def ajax_order(request):
    if request.method == "POST":
        try:
            product_type = request.POST.get("product_type")
            product_id = request.POST.get("product_id")
            nama = request.POST.get("nama")
            durasi = request.POST.get("durasi")

            # Field tambahan
            alamat = request.POST.get("alamat")
            email = request.POST.get("email")
            wa_perusahaan = request.POST.get("wa_perusahaan")
            nama_pj = request.POST.get("nama_pj")
            wa_pj = request.POST.get("wa_pj")

            # Cek apakah preview atau order asli
            is_preview = request.POST.get("preview") == "true"

            if not durasi or not product_id:
                return JsonResponse({
                    "status": "error",
                    "message": "Data tidak lengkap"
                })

            durasi = int(durasi)

            # =============================
            # 1️⃣ AMBIL PRODUK SESUAI TIPE
            # =============================
            if product_type == "paket":
                product = get_object_or_404(Paket, id=product_id)
                harga_satuan = product.harga

            elif product_type == "meeting":
                product = get_object_or_404(RuangRapat, id=product_id)
                harga_satuan = product.harga_per_jam

            elif product_type == "coworking":
                product = get_object_or_404(Coworking, id=product_id)
                harga_satuan = product.harga

            else:
                return JsonResponse({
                    "status": "error",
                    "message": "Tipe produk tidak valid"
                })

            # =============================
            # 2️⃣ HITUNG TOTAL AWAL
            # =============================
            total_awal = Decimal(harga_satuan) * Decimal(durasi)
            total_akhir = total_awal
            nama_promo = ""
            diskon_persen = 0

            # =============================
            # 3️⃣ CEK PROMO
            # =============================
            today = timezone.now().date()

            promo_list = Promo.objects.filter(
                aktif=True,
                min_durasi__lte=durasi
            )

            promo_valid = [
                p for p in promo_list
                if (
                    (not p.mulai or p.mulai <= today) and
                    (not p.selesai or p.selesai >= today)
                )
            ]

            if promo_valid:
                promo_terbaik = max(
                    promo_valid,
                    key=lambda x: x.diskon_persen
                )

                diskon_persen = float(promo_terbaik.diskon_persen)

                diskon_decimal = promo_terbaik.diskon_persen / Decimal("100")

                total_akhir = (
                    total_awal * (Decimal("1") - diskon_decimal)
                ).quantize(Decimal("0.01"))

                nama_promo = promo_terbaik.nama

            # =============================
            # 4️⃣ SIMPAN KE DATABASE
            # =============================
            if not is_preview:

                if not all([
                    nama,
                    alamat,
                    email,
                    wa_perusahaan,
                    nama_pj,
                    wa_pj
                ]):
                    return JsonResponse({
                        "status": "error",
                        "message": "Semua field wajib diisi"
                    })

                Order.objects.create(
                    product_type=product_type,
                    product_id=product_id,
                    nama_perusahaan=nama,
                    alamat_perusahaan=alamat,
                    email_perusahaan=email,
                    no_wa_perusahaan=wa_perusahaan,
                    nama_penanggung_jawab=nama_pj,
                    no_wa_penanggung_jawab=wa_pj,
                    durasi=durasi,
                    total_harga=total_akhir,
                    status="initiated"
                )

            # =============================
            # 5️⃣ RETURN JSON
            # =============================
            return JsonResponse({
                "status": "success",
                "harga_awal": int(total_awal),
                "total": int(total_akhir),
                "product_name": product.nama,
                "nama_promo": nama_promo,
                "diskon_persen": diskon_persen
            })

        except Exception as e:
            return JsonResponse({
                "status": "error",
                "message": str(e)
            })

    return JsonResponse({
        "status": "error",
        "message": "Metode harus POST"
    })