from django.shortcuts import render


def ReactView(request):
    return render(request, 'index.html')