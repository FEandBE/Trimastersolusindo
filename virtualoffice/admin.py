from django.contrib import admin
from .models import Paket, RuangRapat, Pertanyaan, Coworking,Promo,Order


@admin.register(Promo)
class PromoAdmin(admin.ModelAdmin):
    list_display = ("nama", "min_durasi", "diskon_persen", "aktif", "mulai", "selesai")
    list_filter = ("aktif", "mulai", "selesai")
    search_fields = ("nama",)

@admin.register(Paket)
class PaketAdmin(admin.ModelAdmin):
    list_display = (
        'nama',
        'harga',
        'pengelolaan_surat',
        'jam_meeting',
        'alamat_bisnis',
        'telepon_khusus',
        'layanan_prioritas',
        'aktif',
    )
    list_filter = (
        'aktif',
        'pengelolaan_surat',
        'alamat_bisnis',
        'telepon_khusus',
        'layanan_prioritas',
    )
    search_fields = ('nama',)
    prepopulated_fields = {"slug": ("nama",)}
    list_editable = ('aktif',)
    ordering = ('harga',)


@admin.register(RuangRapat)
class RuangRapatAdmin(admin.ModelAdmin):
    list_display = (
        'nama',
        'harga_per_jam',
        'kapasitas',
        'aktif',
    )
    list_filter = ('aktif', 'kapasitas')
    search_fields = ('nama',)
    prepopulated_fields = {"slug": ("nama",)}
    list_editable = ('aktif',)
    ordering = ('harga_per_jam',)


@admin.register(Pertanyaan)
class PertanyaanAdmin(admin.ModelAdmin):
    list_display = (
        'nama',
        'nomor_hp',
        'paket',
        'dibuat_pada',
    )
    search_fields = ('nama', 'nomor_hp')
    list_filter = ('dibuat_pada',)
    ordering = ('-dibuat_pada',)

@admin.register(Coworking)
class CoworkingAdmin(admin.ModelAdmin):
    list_display = (
        'nama',
        'tipe',
        'harga',
        'aktif'
    )
    list_filter = ('tipe', 'aktif')
    search_fields = ('nama',)
    prepopulated_fields = {"slug": ("nama",)}
    list_editable = ('aktif',)
    ordering = ('-id',)
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):

    list_display = (
        'nama_perusahaan',
        'product_type',
        'durasi',
        'total_harga',
        'status',
        'dibuat_pada',
    )

    list_filter = (
        'product_type',
        'status',
        'dibuat_pada',
    )

    search_fields = (
        'nama_perusahaan',
        'email_perusahaan',
        'no_wa_perusahaan',
        'nama_penanggung_jawab',
    )

    ordering = ('-dibuat_pada',)

    readonly_fields = (
        'dibuat_pada',
    )

    fieldsets = (
        ('Informasi Produk', {
            'fields': (
                'product_type',
                'product_id',
                'durasi',
            )
        }),

        ('Informasi Perusahaan', {
            'fields': (
                'nama_perusahaan',
                'alamat_perusahaan',
                'email_perusahaan',
                'no_wa_perusahaan',
            )
        }),

        ('Penanggung Jawab', {
            'fields': (
                'nama_penanggung_jawab',
                'no_wa_penanggung_jawab',
            )
        }),

        ('Pembayaran & Status', {
            'fields': (
                'total_harga',
                'status',
            )
        }),

        ('Waktu', {
            'fields': (
                'dibuat_pada',
            )
        }),
    )