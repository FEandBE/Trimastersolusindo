from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    path('about/', views.tentang, name='about'),

    path('ruang-rapat/', views.ruang_rapat, name='ruang_rapat'),
    path('meeting/<slug:slug>/', views.ruang_rapat_detail, name='meeting_room_detail'),
    path('testimonial/', views.testimonial, name='testimonial'),
    path('kontak/', views.kontak, name='kontak'),

    path('paket/', views.daftar_paket, name='daftar_paket'),
    path('paket/<slug:slug>/', views.detail_paket, name='detail_paket'),

    path('coworking/', views.coworking_list, name='coworking'),
    path('coworking/<slug:slug>/', views.coworking_detail, name='coworking_detail'),

    path("ajax-order/", views.ajax_order, name="ajax_order"),
]