# Generated by Django 4.1.1 on 2022-09-28 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snickersMarket', '0011_product_color_alter_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='manufacturer',
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.DeleteModel(
            name='Manufacturer',
        ),
    ]
