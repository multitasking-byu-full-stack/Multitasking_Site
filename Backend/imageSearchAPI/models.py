from django.db import models

# Create your models here.
def userID_default():
    return "default@email.com"

class User(models.Model):
    userID = models.CharField(max_length=320, default=userID_default)
    began_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    responses = models.JSONField()