# Generated by Django 3.2.12 on 2022-07-13 23:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('taskstodo', '0002_alter_note_date_of_creation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='date_of_creation',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
