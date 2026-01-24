from django.shortcuts import render

# Create your views here.
def n2(request):
    return render(request, 'n2/index.html')