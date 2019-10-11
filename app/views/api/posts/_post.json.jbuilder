
json.extract! post, :id, :content
json.authorId post.author_id

#this simply changes the key through which we access the data it points to in the FE