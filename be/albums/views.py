from rest_framework.response import Response
from albums.models import Album
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination
from .serializers import (
    AlbumSerializer,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from .filters import AlbumFilter

class AlbumViewPagination(PageNumberPagination):
    page_size = 5


class AlbumView(ModelViewSet):
    serializer_class = AlbumSerializer
    pagination_class = AlbumViewPagination
    permission_classes = (IsAuthenticated,)
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = AlbumFilter
    search_fields = ['id', 'name', 'artist__first_name']

    queryset = Album.objects.all()
    lookup_field = 'id'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, 
            data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=200)
    
    def list(self, request):
        albums = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(albums)
        serializer = self.get_serializer(page, many=True)
        return self.get_paginated_response(serializer.data)
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=201)