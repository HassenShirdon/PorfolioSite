# Generated by Django 4.2.2 on 2023-07-13 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personalsite', '0003_project_githublink_project_livelink'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='video',
        ),
        migrations.AddField(
            model_name='project',
            name='picture',
            field=models.ImageField(blank=True, upload_to='media/'),
        ),
    ]
