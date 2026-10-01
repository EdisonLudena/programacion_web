from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import *
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin

# Create your views here.
def index(request):
    titulo = settings.TITULO
    return render(request, 'home.html', {'titulo': titulo})

def registro(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario) #Iniciar sesion
            return redirect('index') #Inicio
    else: 
        form = UserCreationForm
    return render(request, "registration/registro.html", {'form':form})

class CelularesListView(ListView):
    model =  Celulares
    template_name = 'celulares.html'
    context_object_name =  'celulares'  # {% for %}
    
class CelularesCreateView(LoginRequiredMixin, PermissionRequiredMixin, CreateView):
    model = Celulares
    fields = ['marcas', 'modelo', 'precio', 'stock', 'descripcion', 'disponible']
    template_name = 'crear_celulares.html'
    success_url = reverse_lazy('lista_celulares')
    permission_required = 'celulares.add_celular'
    
    def form_invalid(self, form):
        print("ERRORES DEL FORMULARIO:", form.errors)  
        return super().form_invalid(form)
    
class CelularesUpdateView(LoginRequiredMixin, PermissionRequiredMixin, UpdateView):
    model = Celulares
    fields = ['modelo', 'precio', 'stock', 'descripcion']
    template_name = 'editar_celulares.html'
    success_url= reverse_lazy('lista_celulares')
    permission_required = 'celulares.change_celular'
    
class CelularesDeleteView(LoginRequiredMixin, PermissionRequiredMixin, DeleteView):
    model = Celulares
    template_name = 'delete_celular.html'
    success_url = reverse_lazy('lista_celulares')
    permission_required = 'celulares.delete_celular'