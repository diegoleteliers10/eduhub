from rest_framework import viewsets
from .serializer import *
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

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
    
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        
        print("Received data:", data)
        print("Username:", username)
        print("Password:", password)

        try:
            user = Users.objects.get(username=username, password=password)
            print("User found:", user)
            return JsonResponse({
                'status': 'error',
                'message': 'Login successful'
            })
        except Users.DoesNotExist:
            print("User not found")
            return JsonResponse({
                'status': 'error',
                'message': 'User not found, login failed'
            })
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)