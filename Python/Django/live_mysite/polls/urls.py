from django.urls import path
from . import views
app_name = 'polls'

urlpatterns = [
    # ex: /polls/
    path("", views.IndexView.as_view()),
    
    # ex: /polls/5/results/
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    
    # ex: /polls/5/
    path("<int:pk>/", views.QuestionDetailView.as_view(), name="details")
    
    # ex: /polls/5/vote/
    
]
