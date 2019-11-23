json.extract! user, :id, :first_name, :last_name, :email_address, 
:workplace, :bio, :school, :hometown, :current_city, :rel_status, :birthday

json.authoredPostIds user.authored_post_ids

json.receivedPostIds user.received_post_ids

json.authoredCommentIds user.authored_comment_ids

json.profilePhotoUrl user.profilePhoto.attached? ? url_for(user.profilePhoto) : "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-1/c47.0.160.160a/p160x160/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_oc=AQlh0ggOrTm0pJcQu2irtZNvB7Pcmnu2iXMp9-sM3ga6CdUG0Vm9vg87QJQEosZR863p-g6E6l1NFqlCQds8Zp-u&_nc_ht=scontent-iad3-1.xx&oh=ba31d6e1386ef4f7ff3cdcda067aba3a&oe=5E4E6550"
json.coverPhotoUrl user.coverPhoto.attached? ? url_for(user.coverPhoto) : "https://media.licdn.com/dms/image/C5616AQFWihmG_L3Hyg/profile-displaybackgroundimage-shrink_350_1400/0?e=1579737600&v=beta&t=43t4k-C_5O1LQz12tmlhjL2Bbg5EQ3XNZl3AAlQyJRw"

#careful

json.photosUrl user.photos.map {|file| url_for(file)}

friendRequestSentToIds = []
friendRequestReceivedFromIds = []

friendIds = []

user.friend_requests_sent.each do |friend|
    friendRequestSentToIds << friend.friend_receiver if friend.status == "PENDING"
    friendIds << friend.friend_receiver if friend.status == "APPROVED" 
end

user.friend_requests_received.each do |friend|
    friendRequestReceivedFromIds << friend.friend_sender if friend.status == "PENDING"
    friendIds << friend.friend_sender if friend.status == "APPROVED" 
end

json.friendIds friendIds

json.friendRequestSentToIds friendRequestSentToIds
json.friendRequestReceivedFromIds friendRequestReceivedFromIds

json.likedPostIds user.liked_post_ids