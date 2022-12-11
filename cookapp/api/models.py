from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=100, unique=True)


class Recipe(models.Model):
    title = models.CharField(max_length=100, unique=True)
    body = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
