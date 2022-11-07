from rest_framework import serializers
from .models import Product, BagElement


class ProductSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'in_stock', 'price', 'image_url')

    def get_image_url(self, product):
        request = self.context.get('request')
        image_url = product.image.url
        return request.build_absolute_uri(image_url)


class BagElementSerializer(serializers.ModelSerializer):
    product = serializers.SlugRelatedField(queryset=Product.objects.all(), slug_field='id')

    class Meta:
        model = BagElement
        fields = ('id', 'product', 'amount', 'color', 'size')
