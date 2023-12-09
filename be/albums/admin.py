from django.contrib import admin
from .models import Musician, Album

@admin.register(Musician)
class MusicianAdmin(admin.ModelAdmin):
    search_fields = ('first_name', 'last_name',)
    list_display = ('id', 'first_name', 'last_name',)


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    list_display = ('id', 'name', 'release_date',)