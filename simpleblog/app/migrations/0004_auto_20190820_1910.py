# Generated by Django 2.0.3 on 2019-08-20 19:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20190820_1846'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='title',
            new_name='tag',
        ),
    ]
