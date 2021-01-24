from rest_framework import serializers
from comments.models import Comment

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user_id.name', read_only=True)
    class Meta:
        model = Comment
        fields = ('id', 'user_id', 'user', 'tweet_id', 'content', 'image', 'created_at')