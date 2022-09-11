from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Product
from .serializers import ProductSerializer

from rest_framework import generics


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class IndexView(generic.ListView):
    template_name = 'snickersMarket/index.html'
    context_object_name = 'products_list'

    def get_queryset(self):
        """Return all products."""
        return Product.objects.all()


class DetailView(generic.DetailView):
    model = Product
    template_name = 'snickersMarket/detail.html'
