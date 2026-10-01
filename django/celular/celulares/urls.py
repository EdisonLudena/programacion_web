
from django.urls import path
from .views import *
from django.conf import settings
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', index, name='index'),

    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path("registro/", registro, name="registro"),
    path("celulares/", CelularesListView.as_view(), name="lista_celulares"),
    path("celulares/crear/", CelularesCreateView.as_view(), name="crear_celulares"),
    path("celulares/<int:pk>/editar", CelularesUpdateView.as_view(), name= "editar_celulares"),
    path("celulares/<int:pk>/eliminar", CelularesDeleteView.as_view(), name="eliminar_celulares"),
]