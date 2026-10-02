from django.urls import path
from . import views

urlpatterns = [
    path('comprar/<int:celular_id>/', views.realizar_pedido, name='realizar_pedido'),
    path('mis-compras/', views.lista_pedidos, name='lista_pedidos'),
]