from django.urls import path
from . import views

app_name = 'blog'  # creates a namespace for this app
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.PostDetailView.as_view(), name='detail'),
]