from django.urls import path

from . import views

app_name = 'snickersMarket'
urlpatterns = [
    # Views for loading webpages to show in browser
    path('', views.index_view, name='index'),  # page for all products ( catalogue )
    path('<int:pk>/', views.detail_view, name='detail'),  # page for detail view for single product
    path('bag/', views.bag_view, name='bag'),  # page for user's bag
    path('edit/', views.edit_view, name='create'),  # page for creating new objects

    # Views for api requests
    path('api/products/', views.products_api, name='api_index'),  # get all products
    path('api/<int:pk>/', views.product_detail_api, name='api_detail'),  # get information of single product
    path('bag/api/', views.bag_api, name='bag'),  # get user's bag
    path('edit/api/create_product/', views.create_product_api, name='create_product'),  # create product
    # path('edit/api/can_edit', views.can_edit_api, name='can_edit'),  # check if user can edit product list

    # Get all entries from db
    path('api/entries/<str:value_name>', views.entries_api, name='entries'),

    # logout page ( mostly for debug purposes )
    path('logout/', views.logout_api, name='logout'),

    # page for logining user in
    path('login/', views.login_api, name='login'),
]
