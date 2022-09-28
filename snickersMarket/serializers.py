from rest_framework import serializers
from .models import Product, BagElement


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'in_stock', 'price', 'image')


class BagElementSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(queryset=Product.objects.all(), slug_field='id')

    class Meta:
        model = BagElement
        fields = ('id', 'product', 'amount', 'color', 'size')
