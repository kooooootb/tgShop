# Generated by Django 4.1.1 on 2022-09-28 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snickersMarket', '0010_alter_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.CharField(default='transparent', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(default='/static/defaultImage.jpg', upload_to='images/'),
        ),
    ]
