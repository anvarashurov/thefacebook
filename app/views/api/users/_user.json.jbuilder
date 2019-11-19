json.extract! user, :id, :first_name, :last_name, :email_address, 
:workplace, :bio, :school, :hometown, :current_city, :rel_status, :birthday

json.authoredPostIds user.authored_post_ids

json.receivedPostIds user.received_post_ids

json.authoredCommentIds user.authored_comment_ids

json.profilePhotoUrl user.profilePhoto.attached? ? url_for(user.profilePhoto) : nil
json.coverPhotoUrl user.coverPhoto.attached? ? url_for(user.coverPhoto) : nil

#careful

#debugger

json.photosUrl user.photos.map {|file| url_for(file)}

friendRequestSentToIds = []
friendRequestReceivedFromIds = []

friendIds = []

user.friend_requests_sent.each do |friend|
    friendRequestSentToIds << [friend.friend_receiver, friend.status]
    friendIds << friend.friend_receiver if friend.status == "APPROVED" 
end

user.friend_requests_received.each do |friend|
    friendRequestReceivedFromIds << [friend.friend_sender, friend.status]
    friendIds << friend.friend_sender if friend.status == "APPROVED" 
end

json.friendIds friendIds

json.friendRequestSentToIds friendRequestSentToIds
json.friendRequestReceivedFromIds friendRequestReceivedFromIds
