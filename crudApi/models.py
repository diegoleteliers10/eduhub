from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Users(models.Model):
  fullname= models.CharField(max_length=30)
  username= models.CharField(max_length=30)
  email= models.EmailField()
  password= models.CharField(max_length=30)
  phone= models.CharField(max_length=30)
  age= models.IntegerField()
  gender= models.CharField(max_length=30)
  university= models.CharField(max_length=30)
  year= models.CharField(max_length=30)
  avatar= models.ImageField(upload_to='avatars/', blank=True)
  
  def __str__(self):
    return self.username
  
class Posts(models.Model):
  text= models.CharField(max_length=5000)
  likes= models.IntegerField(blank=True, null=True)
  images= ArrayField(models.ImageField(), blank=True, null=True)
  comments= ArrayField(models.CharField(max_length=5000), blank=True, null=True)
  user_id=  models.ManyToManyField(Users)
  
  def __str__(self):
    return self.user_id
  
class Chats(models.Model):
    name = models.CharField(max_length=100, blank=True)
    participants = models.ManyToManyField(Users)
    created_at = models.DateTimeField(auto_now_add=True)
    avatar= models.ImageField(upload_to='chat/avatars/', blank=True)
    unread_messages= models.IntegerField(blank=True, null=True)
    
    def __str__(self):
      return self.name
  
class Message(models.Model):
    sender = models.ForeignKey(Users, on_delete=models.CASCADE)
    receiver = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='receiver', default=None)
    chat = models.ForeignKey(Chats, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
      return self.sender.username