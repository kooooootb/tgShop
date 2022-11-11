from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'image_url')

    def get_image_url(self, product):
        # request = self.context.get('request')
        # image_url = product.image.url
        # return request.build_absolute_uri(image_url)
        return product.image.url
