from django.shortcuts import render

# Create your views here.
def n3(request):
    return render(request, 'n3/index.html')