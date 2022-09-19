from django.db import models


# Create your models here.
class Manufacturer(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    in_stock = models.IntegerField()
    price = models.IntegerField()
    image = models.ImageField(default='none')

    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
