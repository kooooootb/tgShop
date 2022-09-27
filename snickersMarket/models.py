from django.db import models
from django.contrib.auth.models import User


class Manufacturer(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    in_stock = models.IntegerField()
    price = models.IntegerField()
    image = models.ImageField(default='/static/defaultImage.jpg')

    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'


# single user may have several bagelements or don't have them at all
# every bagelement represents products in user's bag of single type
class BagElement(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    amount = models.IntegerField(default=0)
    color = models.CharField(default='', max_length=15)
    size = models.CharField(default='', max_length=5)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'\"{self.product}\": amount={self.amount} size={self.size} color={self.color}'
