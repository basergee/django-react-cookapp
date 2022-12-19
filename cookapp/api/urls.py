from django.urls import path
from django.views.generic import TemplateView

from .views import CategoryViewSet, RecipeViewSet


urlpatterns = [
    path('dishes/', CategoryViewSet.as_view({'get': 'list'})),
    path('dishes/<int:pk>/', CategoryViewSet.as_view({'get': 'retrieve'})),

    path('recipes/', RecipeViewSet.as_view({'get': 'list'})),
    path('recipes/<int:pk>/', RecipeViewSet.as_view({'get': 'retrieve'})),

    # Выводим страницу с документацией к API
    path('', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema.yml'}
    ), name='swagger-ui'),
]
