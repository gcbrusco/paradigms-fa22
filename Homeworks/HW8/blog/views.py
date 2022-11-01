from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post

# Create your views here.
class IndexView(ListView):
    template_name = 'index.html'
    context_object_name = 'post_list'
    def get_queryset(self):
        """Return the last five published posts."""
        return Post.objects.order_by('-pub_date')

class PostDetailView(DetailView):
    model = Post
    template_name = 'post.html'