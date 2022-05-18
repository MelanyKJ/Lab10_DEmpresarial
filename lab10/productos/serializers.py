from rest_framework import serializers
from .models import Productos
class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ('id', 'descripcion', 'precio')
        
    def create(self, validated_data):
        return Productos.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.descripcion = validated_data.get('descripcion', instance.descripcion)
        instance.precio = validated_data.get('precio', instance.precio)
        instance.save()
        return instance 