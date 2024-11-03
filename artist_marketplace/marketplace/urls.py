from django.urls import path
from .views import register, buyer_home, seller_home, login, commission, workshop

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('buyer_home/', buyer_home, name='buyer_home'),
    path('seller_home/', seller_home, name='seller_home'),
     path('commission/', commission, name='commission'),  # Commission page
    path('workshop/', workshop, name='workshop'),  # Workshop page
]