json.extract! user, :id, :first_name, :last_name, :email_address
json.authoredPostIds user.authored_post_ids
json.authoredCommentIds user.authored_comment_ids

json.profilePhotoUrl user.profilePhoto.attached? ? url_for(user.profilePhoto) : nil
json.coverPhotoUrl user.coverPhoto.attached? ? url_for(user.coverPhoto) : nil

friendRequestSentToIds = []
friendRequestReceivedFromIds = []

user.friend_requests_sent.each do |friend|
    friendRequestSentToIds << [friend.friend_receiver, friend.status]
end

user.friend_requests_received.each do |friend|
    friendRequestReceivedFromIds << [friend.friend_sender, friend.status]
end

json.friendRequestSentToIds friendRequestSentToIds
json.friendRequestReceivedFromIds friendRequestReceivedFromIds