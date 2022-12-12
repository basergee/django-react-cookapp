from django.urls import path
from .views import CategoryViewSet, RecipeViewSet


urlpatterns = [
    path('dishes/', CategoryViewSet.as_view({'get': 'list'})),
    path('dishes/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve'})),

    path('recipes/', RecipeViewSet.as_view({'get': 'list'})),
    path('recipes/<int:pk>/', RecipeViewSet.as_view({'get': 'retrieve'})),
]
