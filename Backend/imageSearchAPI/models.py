from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField()
    began_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    responses = models.JSONField()