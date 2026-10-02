from django.db import models
from django.contrib.auth.models import User #superusuario

# Create your models here.
class Celulares (models.Model):
    MARCAS = [('nombre', 'Samsung'), ('nombre2', 'Apple')]
    marcas = models.CharField(max_length=20, choices=MARCAS)
    modelo = models.CharField(max_length=20)
    precio = models.DecimalField(max_digits=6, decimal_places=2) 
    stock= models.IntegerField(default=0)
    descripcion = models.TextField(blank=True, null=True)
    fecha_lanzamiento = models.DateTimeField(auto_now_add=True)
    disponible = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.modelo} - {self.marcas}"
    
    
class Usuarios (models.Model):
    cliente = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return self.cliente.username