from django.contrib import admin

from .models import Project, Activity, TimeEntry, Category

# Register your models here.

admin.site.register(Project)
admin.site.register(Activity)
admin.site.register(TimeEntry)
admin.site.register(Category)