from rest_framework import viewsets
from .serializer import *
from .models import *

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer 
    queryset = Users.objects.all()
    
class PostView(viewsets.ModelViewSet):
    serializer_class = PostsSerializer
    queryset = Posts.objects.all() 
    
class ChatView(viewsets.ModelViewSet):
    serializer_class = ChatsSerializer
    queryset = Chats.objects.all() 
    
class MessageView(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()