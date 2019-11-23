@likes.each do |like|
    json.set! like.id do
        json.partial! 'api/likes/like', like: like
    end
end

# remember: json.set! sets the id which points to the object