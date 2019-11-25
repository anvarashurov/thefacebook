json.extract! comment, :id, :content
json.authorId comment.author_id
json.postId comment.post_id
json.createdAt comment.created_at

json.likeIds comment.like_ids
json.likerIds comment.liker_ids