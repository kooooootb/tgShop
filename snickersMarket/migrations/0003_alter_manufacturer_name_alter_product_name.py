# Generated by Django 4.1.1 on 2022-09-11 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snickersMarket', '0002_delete_manufacturer2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manufacturer',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
