# Generated by Django 4.1.10 on 2023-07-24 21:57

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('avatar', models.ImageField(blank=True, upload_to='chat/avatars/')),
                ('unread_messages', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=30)),
                ('username', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=30)),
                ('phone', models.CharField(max_length=30)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=30)),
                ('university', models.CharField(max_length=30)),
                ('year', models.CharField(max_length=30)),
                ('avatar', models.ImageField(blank=True, upload_to='avatars/')),
            ],
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=5000)),
                ('likes', models.IntegerField(blank=True, null=True)),
                ('images', django.contrib.postgres.fields.ArrayField(base_field=models.ImageField(upload_to=''), blank=True, null=True, size=None)),
                ('comments', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=5000), blank=True, null=True, size=None)),
                ('user_id', models.ManyToManyField(to='crudApi.users')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('chat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crudApi.chats')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crudApi.users')),
            ],
        ),
        migrations.AddField(
            model_name='chats',
            name='participants',
            field=models.ManyToManyField(to='crudApi.users'),
        ),
    ]
