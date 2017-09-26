from django.views.generic.base import TemplateView

from .serializers import MovieSerializer, MovieDetailsSerializer, RegistrationFormSerializer
from rest_framework import viewsets
from .models import Movie,MovieDetails,RegistrationForm

from django.shortcuts import render



class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailsViewSet(viewsets.ModelViewSet):
    queryset = MovieDetails.objects.all()
    serializer_class = MovieDetailsSerializer

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = RegistrationForm.objects.all()
    serializer_class = RegistrationFormSerializer



class HomeView(TemplateView):
    template_name = 'index.html'
