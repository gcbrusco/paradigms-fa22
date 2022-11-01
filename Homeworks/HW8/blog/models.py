from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=500)
    author_name = models.CharField(max_length=30)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return f"{self.id}: {self.title}"