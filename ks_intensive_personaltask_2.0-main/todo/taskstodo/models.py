from django.db import models
from django.utils import timezone


# Create your models here.
class Note(models.Model):
    title = models.CharField(
        verbose_name='Заголовок',
        max_length=20)
    text = models.TextField(
        verbose_name='Описание задачи')
    date_of_creation = models.DateTimeField(
        default=timezone.now)
    author = models.ForeignKey(
        'Author',
        on_delete=models.CASCADE)
    tag = models.ForeignKey(
        'Tag',
        on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Author(models.Model):
    name = models.CharField(
        verbose_name='Имя',
        max_length=100)
    title = models.CharField(
        verbose_name='Должность',
        max_length=50)
    on_vacation = models.BooleanField(
        verbose_name='В отпуске',
        default=False)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(
        verbose_name='Тэг',
        max_length=15)
    description = models.TextField(verbose_name='Описание')
    color = models.CharField(
        verbose_name='Цвет',
        max_length=20)

    def __str__(self):
        return self.name
