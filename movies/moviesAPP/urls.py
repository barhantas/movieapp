from django.conf.urls import url, include
from django.db.models import fields
from rest_framework import routers
from .views import MovieViewSet, MovieDetailsViewSet, RegistrationViewSet
from moviesAPP.views import HomeView

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'movieDetails', MovieDetailsViewSet)
router.register(r'RegistrationForm', RegistrationViewSet)


urlpatterns = [
    url(r'^restapi/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]