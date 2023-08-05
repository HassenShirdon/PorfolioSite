from django.db import models
import os
# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    picture = models.ImageField(upload_to='personalsite/static/images',
                                height_field=None, width_field=None, max_length=100, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    githublink = models.URLField(default=0)
    livelink = models.URLField(default=0)
    technologies_used = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name + self.email
