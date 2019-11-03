export const createFriendRequest = (senderId, receiverId) => {
    debugger
    return $.ajax({
        method: "POST",
        url: '/api/friend',
        data: {
            senderId: senderId,
            receiverId: receiverId,
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