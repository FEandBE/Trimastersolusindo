from django.db import models
from django.utils.text import slugify
from django.utils import timezone



class Paket(models.Model):
    nama = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, unique=True)

    harga = models.DecimalField(max_digits=12, decimal_places=0)
    deskripsi = models.TextField()
    gambar = models.ImageField(upload_to='paket/', blank=True, null=True)

    alamat_bisnis= models.BooleanField(default=False)
    pengelolaan_surat = models.BooleanField(default=False)
    jam_meeting = models.IntegerField(default=0)

    telepon_khusus = models.BooleanField(default=False)
    layanan_prioritas = models.BooleanField(default=False)

    aktif = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nama)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nama


class RuangRapat(models.Model):
    nama = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, unique=True)

    harga_per_jam = models.DecimalField(max_digits=12, decimal_places=0)
    deskripsi = models.TextField()
    kapasitas = models.IntegerField(default=0)

    gambar = models.ImageField(upload_to='ruang_rapat/', blank=True, null=True)
    aktif = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nama)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nama


class Pertanyaan(models.Model):
    nama = models.CharField(max_length=100)
    nomor_hp = models.CharField(max_length=20)

    paket = models.ForeignKey(Paket, on_delete=models.SET_NULL, null=True, blank=True)
    pesan = models.TextField(blank=True)

    dibuat_pada = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nama

class Coworking(models.Model):
    nama = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, unique=True)

    harga = models.DecimalField(max_digits=12, decimal_places=0)
    deskripsi = models.TextField()

    tipe = models.CharField(max_length=50, choices=[
        ('harian', 'Harian'),
        ('bulanan', 'Bulanan'),
        ('dedicated', 'Dedicated Desk'),
    ])

    gambar = models.ImageField(upload_to='coworking/', blank=True, null=True)
    aktif = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nama)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nama


class Order(models.Model):

    PRODUCT_TYPE = [
        ('paket', 'Paket'),
        ('meeting', 'Ruang Rapat'),
        ('coworking', 'Coworking'),
    ]

    STATUS_CHOICES = [
        ('initiated', 'Initiated'),
        ('contacted', 'Contacted'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]

    product_type = models.CharField(max_length=20, choices=PRODUCT_TYPE)
    product_id = models.IntegerField()

    # Data Perusahaan
    nama_perusahaan = models.CharField(max_length=255)
    alamat_perusahaan = models.TextField()
    email_perusahaan = models.EmailField()
    no_wa_perusahaan = models.CharField(max_length=20)

    # Data Penanggung Jawab
    nama_penanggung_jawab = models.CharField(max_length=255)
    no_wa_penanggung_jawab = models.CharField(max_length=20)

    durasi = models.PositiveIntegerField()
    total_harga = models.DecimalField(max_digits=15, decimal_places=2)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='initiated'
    )

    dibuat_pada = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nama_perusahaan} - {self.product_type} - {self.status}"
        


class Promo(models.Model):
    nama = models.CharField(max_length=100)

    min_durasi = models.PositiveIntegerField()
    diskon_persen = models.DecimalField(max_digits=5, decimal_places=2)

    aktif = models.BooleanField(default=True)

    mulai = models.DateField(null=True, blank=True)
    selesai = models.DateField(null=True, blank=True)

    def is_valid(self):
        today = timezone.now().date()

        if not self.aktif:
            return False

        if self.mulai and self.selesai:
            return self.mulai <= today <= self.selesai

        return True

    def __str__(self):
        return f"{self.nama} - {self.diskon_persen}%"