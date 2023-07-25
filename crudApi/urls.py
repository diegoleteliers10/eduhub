from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from crudApi import views
from django.urls import include

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'users')
router.register(r'posts', views.PostView, 'posts')
router.register(r'chats', views.ChatView, 'chats')
router.register(r'messages', views.MessageView, 'messages')

urlpatterns = [
    path('api/',include(router.urls)),
    path('docs/', include_docs_urls(title='CrudApi')),
]
