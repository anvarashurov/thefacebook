json.extract! user, :id, :first_name, :last_name, :email_address
json.authoredPostIds user.authored_post_ids
json.authoredCommentIds user.authored_comment_ids

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