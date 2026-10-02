from django.db import models
from django.contrib.auth.models import User
from celulares.models import Celulares

# Create your models here.

class Pedido(models.Model):
    
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    
    celular = models.ForeignKey(Celulares, on_delete=models.CASCADE)
    
    cantidad = models.IntegerField(default=1)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.usuario.username} compro {self.celular.modelo}"