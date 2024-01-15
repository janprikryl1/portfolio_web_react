from django.db import models


# Create your models here.
class Message(models.Model):
    name = models.TextField()
    email = models.EmailField()
    subject = models.CharField(max_length=20)
    message = models.TextField()

    date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} : {self.subject}'


categories = (
    ("w", "web"),
    ("a", "application"),
    ("e", "else")
)


class Screenshot(models.Model):
    description = models.CharField(max_length=25)
    image = models.ImageField(upload_to="screenshots/")


class Project(models.Model):
    category = models.CharField(max_length=1, choices=categories, default="w")
    name = models.CharField(max_length=20)
    description = models.TextField()
    purpose = models.TextField()
    screenshots = models.ManyToManyField(Screenshot)
    icon = models.ImageField(upload_to="project_icons/")
    repository = models.CharField(max_length=100)
    date_time = models.DateTimeField(auto_now=True)

    name_en = models.CharField(max_length=20, default="")
    description_en = models.TextField(default="")
    purpose_en = models.TextField(default="")

    def __str__(self):
        return self.name
