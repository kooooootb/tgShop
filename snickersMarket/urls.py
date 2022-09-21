from django.urls import path

from . import views

app_name = 'snickersMarket'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # path('products/', views.products_view, name='api_index'),
    path('api/', views.products_view, name='api_index'),
    # path('products/<int:pk>/', views.product_detail_view, name='api_detail'),
    path('api/<int:pk>/', views.product_detail_view, name='api_detail'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
