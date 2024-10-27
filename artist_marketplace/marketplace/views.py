from django.shortcuts import render, redirect
from .forms import UserRegistrationForm
from django.contrib.auth import login

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            login(request, user)
            return redirect('buyer_home' if user.user_type == 1 else 'seller_home')
    else:
        form = UserRegistrationForm()
    return render(request, 'register.html', {'form': form})

def login(request):
    if request.method == "POST":
        pass
    else:
        form = UserRegistrationForm()
    return render(request,'login.html',{'form':form})

def buyer_home(request):
    return render(request, 'buyer_home.html')

def seller_home(request):
    return render(request, 'seller_home.html')

def commission(request):
    return render(request, 'commission.html')  # Create this template

def workshop(request):
    return render(request, 'workshop.html')  # Create this template