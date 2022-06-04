# Generated by Django 3.0 on 2022-06-04 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220603_2322'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ImageObject',
            new_name='ImageRealty',
        ),
        migrations.AlterField(
            model_name='owner',
            name='email',
            field=models.CharField(default='', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='token',
            name='token',
            field=models.CharField(max_length=255),
        ),
    ]
