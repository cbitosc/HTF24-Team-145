# Create your models here.
from django.contrib.auth.models import AbstractUser 
from django.db import models

class User(AbstractUser ):
    USER_TYPE_CHOICES = (
        (1, 'Buyer'),
        (2, 'Seller'),
    )
    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES)
