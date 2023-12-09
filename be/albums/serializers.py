from rest_framework.serializers import ModelSerializer
from .models import Album, Musician

class MusicianSerializer(ModelSerializer):
    class Meta:
        model = Musician 
        fields = '__all__'

class AlbumSerializer(ModelSerializer):
    # artist = MusicianSerializer(many=False)
    class Meta:
        model = Album
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['artist'] = MusicianSerializer(instance.artist, many=False).data
        return data


    