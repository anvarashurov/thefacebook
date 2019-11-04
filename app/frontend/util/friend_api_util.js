export const createFriendRequest = (senderId, receiverId) => {
    debugger
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

// export const fetchAllFriendRequests = (userId) => {
//     // debugger
//     return $.ajax({
//         method: "GET",
//         url: "api/users/",
//     })
// }