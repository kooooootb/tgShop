from rest_framework import serializers
from .models import Product, Manufacturer


class ProductSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SlugRelatedField(queryset=Manufacturer.objects.all(), slug_field='name')

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'in_stock', 'price', 'manufacturer')
