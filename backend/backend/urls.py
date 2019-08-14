"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings
from todos.models import Todo
from rest_framework import routers, serializers, viewsets
from todos.views import TodoViewSet
# Serializers define the API representation.
from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     todos = serializers.PrimaryKeyRelatedField(many=True, queryset=Todos.objects.all())

#     class Meta:
#         model = User
#         fields = ['id', 'username', 'todos']

# ViewSets define the view behavior.





# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('items', TodoViewSet, basename='')
# router.register('users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('accounts/', include('django.contrib.auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', include('todos.urls'))
]
