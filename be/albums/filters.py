import django_filters
from .models import Album

class AlbumFilter(django_filters.FilterSet):
    date_start = django_filters.DateFilter(field_name='release_date', lookup_expr='gte')
    date_end = django_filters.DateFilter(method='filter_date_end')
    count_gte = django_filters.NumberFilter(field_name='num_stars', lookup_expr='gte')

    def filter_date_end(self, queryset, name, value):
        return queryset.filter(release_date__lte=value)

    class Meta:
        model = Album
        fields = []