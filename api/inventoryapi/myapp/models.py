from django.db import models

class User(models.Model):
    name = models.TextField()
    uuid = models.UUIDField()

# Create your models here.
class Generator(models.Model):
    name = models.TextField()
    yearBuilt = models.IntegerField()
    unitsGenerated = models.TextField()
    unit = models.TextField()
    owner = models.ForeignKey("User", on_delete=models.SET_NULL, null=True)