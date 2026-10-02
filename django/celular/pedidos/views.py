from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Pedido
from celulares.models import Celulares

# Create your views here.
@login_required
def realizar_pedido(request, celular_id):
    celular = get_object_or_404(Celulares, id=celular_id)
    
    if celular.stock > 0:
        Pedido.objects.create(
            usuario = request.user,
            celular=celular,
            cantidad = 1
        )
        
        celular.stock -= 1  # 10 = 10 -1    -> stock =9
        celular.save()
        messages.success(request, f"!Compra exitosa¡ Has adquirido un {celular.modelo}.")
        return redirect('lista_pedidos')
    else: 
        messages.error(request, "Lo sentimos, este equipo se acaba de agotar")
        return redirect('lista_celulares')
    
    
@login_required
def lista_pedidos(request):
    mis_pedidos = Pedido.objects.filter(usuario=request.user).order_by('-fecha_compra')
    
    return render(request, 'pedidos/mis_compras.html', {
        'pedidos': mis_pedidos
    })