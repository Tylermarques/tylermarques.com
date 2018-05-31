from django.db import models


# Create your models here.

class Project(models.Model):

    def __str__(self):
        return f'<Project> {self.name}'

    parent_id = models.ForeignKey("self", on_delete=models.PROTECT, null=True, blank=True)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    start_date = models.DateTimeField('Date project started')


class Category(models.Model):

    def __str__(self):
        return f'<Category> {self.name}'

    parent_id = models.ForeignKey("self", on_delete=models.PROTECT, null=True, blank=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)


class Activity(models.Model):

    def __str__(self):
        return f'<Activity> {self.name}'

    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200, null=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class TimeEntry(models.Model):

    def __str__(self):
        return f'<TimeEntry> {self.description} Start={self.start_time} End={self.end_time}'

    activity_id = models.ForeignKey(Activity, on_delete=models.CASCADE)
    description = models.CharField(max_length=200)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


