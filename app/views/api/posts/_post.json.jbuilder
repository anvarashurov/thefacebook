json.extract! post, :id, :content
json.authorId post.author_id
json.receiverId post.receiver_id
json.photoURL post.photo.attached? ? url_for(post.photo) : nil
json.commentIds post.comment_ids
json.createdAt post.created_at.to_date
json.extra post.created_at
json.likeIds post.like_ids
json.likerIds post.liker_ids