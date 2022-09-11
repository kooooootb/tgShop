from rest_framework.routers import DefaultRouter

from .views import TodoViewSet, AuthorViewSet, TagViewSet

router = DefaultRouter()
router.register(r'taskstodo/todos', TodoViewSet, basename='todo')
router.register(r'taskstodo/authors', AuthorViewSet, basename='author')
router.register(r'taskstodo/tags', TagViewSet, basename='tag')

urlpatterns = router.urls
