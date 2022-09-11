from django.contrib import admin
from .models import Note, Author, Tag

# Register your models here.
admin.site.register(Note)
admin.site.register(Author)
admin.site.register(Tag)
