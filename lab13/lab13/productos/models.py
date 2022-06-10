from django.db import models

# Create your models here.
class Productos(models.Model):
    descripcion = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    imagen = models.CharField(max_length=1000)
