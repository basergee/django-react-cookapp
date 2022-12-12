from django.urls import path
from .views import CategoryViewSet


urlpatterns = [
    path('dishes/', CategoryViewSet.as_view({'get': 'list'})),
    path('dishes/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve'})),
]
