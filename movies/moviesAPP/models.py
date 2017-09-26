from django.db import models
from django.contrib.auth.models import User,Permission
from django.contrib.postgres.fields import ArrayField




class Movie(models.Model):
    movie_id = models.IntegerField(primary_key=True)
    poster_path = models.TextField(max_length=100,null=True,blank=True)
    adult = models.NullBooleanField(blank=True, null=True)
    overview = models.TextField(max_length=300,null=True,blank=True)
    release_date = models.DateField(null=True,blank=True)
    original_title = models.TextField(null=True,blank=True)
    original_language = models.TextField(null=True,blank=True)
    title = models.TextField(null=True,blank=True)
    backdrop_path = models.TextField(null=True,blank=True)
    popularity = models.TextField(null=True,blank=True)
    vote_count = models.TextField(null=True,blank=True)
    video = models.NullBooleanField(blank=True, null=True)
    vote_average = models.TextField(null=True,blank=True)
    genre_ids = ArrayField(models.CharField(max_length=50),null=True,blank=True)

    def __str__(self):
        return str(self.movie_id) + '-' + self.title



class MovieDetails(models.Model):
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)
    backdrop_path = models.TextField(max_length=100,null=True,blank=True)
    original_title = models.TextField(null=True,blank=True)
    overview = models.TextField(max_length=300,null=True,blank=True)
    runtime = models.TextField(null=True,blank=True)
    vote_average = models.TextField(null=True,blank=True)
    production_company = models.TextField(null=True,blank=True)
    release_date = models.DateField(null=True,blank=True)
    cast = models.CharField(max_length=5000,null=True,blank=True)

    def __str__(self):
        return str(self.movie_id)


class RegistrationForm(models.Model):
    first_name = models.CharField(max_length=80)
    # Requester Surname
    last_name = models.CharField(max_length=80)
    # Company Name
    company_name = models.CharField(max_length=254)

    # Country
    country_code = models.CharField(max_length=254)

    company_address = models.CharField(max_length=254)
    # company_address_2 = models.CharField(_("address cont'd"), max_length=128, blank=True)
    company_district = models.CharField( max_length=64)
    company_city = models.CharField(max_length=64)
    # state = USStateField(_("state"), default="OH")
    zip_code = models.CharField(max_length=8)

    # [+][country code][subscriber number including area code]
    phone_country_code = models.CharField(max_length=5)
    # [subscriber number including area code]
    phone_number = models.CharField(max_length=15)


    tax_office = models.CharField(max_length=50)

    tax_number = models.CharField(max_length=15)
    company_mail = models.EmailField(max_length=254)
    company_web_site = models.URLField(max_length=200)

    agency_name = models.CharField(max_length=200)


    ap_title = models.CharField(max_length=80)
    ap_first_name = models.CharField(max_length=80)
    ap_last_name = models.CharField(max_length=80)
    # [+][country code][subscriber number including area code]
    ap_phone_country_code = models.CharField(max_length=5)
    # [subscriber number including area code]
    ap_phone_number = models.CharField(max_length=15)
    ap_mail = models.EmailField(max_length=254)
    # annual gross revenue
    gross_revenue = models.CharField(max_length=15)

    gross_revenue_currency = models.CharField(max_length=15)

    def __str__(self):
        return str(self.company_name) + '-' + self.company_mail
