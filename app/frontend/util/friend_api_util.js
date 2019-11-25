export const createFriendRequest = (senderId, receiverId) => {
    // 
    return $.ajax({
        method: "POST",
        url: 'api/friends',
        data: { 
            friend: {
                friend_sender: senderId,
                friend_receiver: receiverId,
            }
        }
    })
}

export const updateFriendRequest = (senderId, receiverId) => {
    //     
    return $.ajax({
        method: "PATCH",
        url: `api/friends/${receiverId}`,
        data: {
            friend: {
                friend_sender: senderId,
                friend_receiver: receiverId,
            }
        }
    })
}

export const deleteFriendRequest = (senderId, receiverId) => {
    //     
    return $.ajax({
        method: "DELETE",
        url: `api/friends/${receiverId}`,
        data: {
            friend: {
                friend_sender: senderId,
                friend_receiver: receiverId,
            }
        }
    })
}