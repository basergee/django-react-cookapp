from rest_framework import viewsets, status
from rest_framework.response import Response


from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def retrieve(self, request, pk=None):
        if Category.objects.filter(pk=pk).exists():
            queryset = Recipe.objects.filter(
                category=Category.objects.get(pk=pk)
            )
            serializer = RecipeSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            content = {'Нет категории': 'Выберите другую категорию'}
            return Response(content, status=status.HTTP_404_NOT_FOUND)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
