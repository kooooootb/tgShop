from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth.models import User
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.datastructures import MultiValueDictKeyError
from django.conf import settings
from django.core.exceptions import FieldError

from .models import Product
from .serializers import ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework import status, generics

from urllib.parse import urlparse, parse_qs  # for login api


def index_view(request):
    """View for home page, showing all products"""
    template_html = 'index.html'
    return render(request, template_html)


@api_view(['GET'])
def products_api(request):
    """Get list of all products"""
    if request.method == 'GET':
        user_id = request.query_params.get('user_id')

        if user_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if user_id != request.user.username:
            logout(request)
            login_func(request, user_id)

        query_params = request.query_params
        if query_params:
            fields = [f.name for f in Product._meta.get_fields()]

            kwargs = {key: value for key, value in query_params.items() if key in fields}

            products = Product.objects.filter(**kwargs)
        else:
            products = Product.objects.all()

        serializer = ProductSerializer(products, many=True, context={'request': request})
        return Response(serializer.data)


@login_required
@api_view(['GET'])
def product_detail_api(request, pk):
    """Get information of single product"""
    if request.method == 'GET':
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)


@api_view(['GET'])
def logout_api(request):
    """Log out user"""
    logout(request)

    if request.method == 'GET':
        try:
            next_url = request.GET['next']
            return redirect(next_url)
        except MultiValueDictKeyError:
            return Response(status=status.HTTP_200_OK)


@login_required
@api_view(['GET'])
def bag_api(request):
    """Get user's bag in serializer"""
    if request.method == 'GET':
        user = request.user

        bag = user.buyer.bag.all()
        serializer = ProductSerializer(bag, many=True)
        return Response(serializer.data)


@login_required
@api_view(['GET'])
def favourites_api(request):
    """Get user's favourite products in serializer"""
    if request.method == 'GET':
        user = request.user

        favourites = user.buyer.favourites.all()
        serializer = ProductSerializer(favourites, many=True)
        return Response(serializer.data)


def login_func(request, user_id):
    # Get user using received id
    user = authenticate(request=request, username=user_id, password='')

    # Create user if not present
    if user is None:
        user = User.objects.create_user(username=user_id, password='')
        user.save()

    # Log in user
    login(request, user)


@api_view(['GET'])
def login_api(request):
    """Log in user, using id from request url"""
    # Request url with user id is in 'next' key
    try:
        next_url = request.GET['next']
    except MultiValueDictKeyError:
        return Response(status=status.HTTP_400_BAD_REQUEST)  # can't go directly to login api

    # Find user id from received link
    parse_object = urlparse(next_url)
    query = parse_qs(parse_object.query)

    user_id = query.get('user_id')
    if not user_id:
        return Response(status=status.HTTP_400_BAD_REQUEST)  # can't authorize without given id

    user_id = ''.join(user_id)  # get string from list of single string

    login_func(request, user_id)

    return redirect(next_url)


@login_required
@staff_member_required
@api_view(['POST'])
def create_product_api(request):
    """Create product using request"""
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
@api_view(['POST'])
def add_bag_api(request):
    if request.method == 'POST':
        with open('/home/git/testtest.txt', 'w') as fd:
            fd.write(str(request.data))

        try:
            product_id = request.data['id']
        except KeyError:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # add product to user's bag
        user = request.user
        user.buyer.bag.add(get_object_or_404(Product, id=product_id))

        return Response(status=status.HTTP_200_OK)


@login_required
@api_view(['POST'])
def add_favourite_api(request):
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @login_required
# @api_view(['GET'])
# def can_edit_api(request):
#     result = str(request.user.has_perm('snickersMarket.add_product'))
#     return HttpResponse({'result': result})
#     # return Response({'result': result})


@login_required
@api_view(['GET'])
def entries_api(request, value_name):
    """Get all variant of values in Product 'value_name' field"""
    if request.method == 'GET':
        try:
            all_entries = Product.objects.order_by().values(value_name).distinct()
        except FieldError:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(all_entries)
