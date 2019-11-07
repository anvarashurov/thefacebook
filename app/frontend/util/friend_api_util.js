export const createFriendRequest = (senderId, receiverId) => {
    return $.ajax({
        method: "POST",
        url: 'api/friend',
        data: { 
            friend: {
                friend_sender: senderId,
                friend_receiver: receiverId,
            }
        }
    })
}