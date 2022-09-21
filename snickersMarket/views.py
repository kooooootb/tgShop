from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.utils.datastructures import MultiValueDictKeyError

from .models import Product
from .serializers import ProductSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework import status, generics


class IndexView(generic.ListView):
    model = Product
    template_name = 'snickersMarket/index.html'
    context_object_name = 'products_list'

    def get_queryset(self):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return serializer.data


class DetailView(generic.DetailView):
    model = Product
    template_name = 'snickersMarket/detail.html'


@api_view(['GET'])
def products_view(request):
    if request.method == 'GET':
        try:
            user_id = request.GET['user_id']
        except MultiValueDictKeyError:
            return Response(status=status.HTTP_403_FORBIDDEN)

        user = authenticate(request, username=user_id)

        if user is None:
            user = User.objects.create_user(username=user_id)
            user.save()

        login(request, user)

        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


@login_required
@api_view(['DELETE', 'GET'])
def product_detail_view(request, pk):
    product = get_object_or_404(Product, pk=pk)

    if request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'GET':
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)


def login_view(request):
    return redirect('snickersMarket:index')

def logout_view(request):
    logout(request)
    redirect('snickersMarket:index')
