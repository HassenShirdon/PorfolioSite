# Generated by Django 4.1 on 2023-07-16 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personalsite', '0005_alter_project_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='picture',
            field=models.ImageField(default=0, upload_to='personalsite/static/images'),
        ),
    ]
