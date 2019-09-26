from django.db import models
from django.contrib.auth.models import User
from datetime import date
import time
from datetime import datetime
from django.utils import timezone
from froala_editor.fields import FroalaField
from django.utils.text import slugify

# Create your models here.
class Signup(models.Model):
    user  = models.OneToOneField(User,on_delete=models.CASCADE);
class Cities(models.Model):
    name = models.CharField(max_length=250)
    desc = models.CharField(max_length=250)
class Article(models.Model):
    name = models.CharField(max_length=250,blank=True,null=True)
    article_type = models.CharField(max_length=250,blank=True,null=True)
    description = models.CharField(max_length=250,blank=True,null=True)
    created = models.DateField(default=timezone.now,null=True, blank=True)
    updated = models.DateField(default=timezone.now,null=True, blank=True)
    artcle_image = models.ImageField(upload_to='picture',blank=True)
    author = models.CharField(max_length=250,blank=True,null=True)
    data = FroalaField()
    slug = models.SlugField(blank=True,null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Article, self).save(*args, **kwargs)
    def __str__(self):
        return self.name

