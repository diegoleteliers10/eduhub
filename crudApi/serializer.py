from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = '__all__'
    
class PostsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Posts
    fields = '__all__'
    
class ChatsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Chats
    fields = '__all__'
    
class MessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Message
    fields = '__all__'