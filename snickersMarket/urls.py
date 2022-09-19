from django.urls import path

from . import views

app_name = 'snickersMarket'
urlpatterns = [
    path('', views.index_view, name='index'),
    path('products/', views.products_view, name='detail'),
    path('products/<int:pk>/', views.product_detail_view, name='detail'),
]
