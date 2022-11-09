from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    class Meta:
        permissions = [
            ('edit_products', 'Can edit products list'),
        ]

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300, blank=True)

    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100, blank=True)

    price = models.IntegerField()

    color = models.CharField(max_length=100)

    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f'{self.name}'


class Buyer(models.Model):
    favourites = models.ManyToManyField(Product, related_name='favourites+')
    bag = models.ManyToManyField(Product, related_name='bag+')
