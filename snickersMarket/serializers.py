from rest_framework import serializers
from .models import Product, Manufacturer, BagElement


class ProductSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SlugRelatedField(queryset=Manufacturer.objects.all(), slug_field='name')

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'in_stock', 'price', 'image', 'manufacturer')


class BagElementSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(queryset=Product.objects.all(), slug_field='id')

    class Meta:
        model = BagElement
        fields = ('id', 'product', 'amount', 'color', 'size')
