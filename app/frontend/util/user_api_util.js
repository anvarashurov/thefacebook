// export const fetchUser = (userId) => {
//     return $.ajax({
//         method: "GET",
//         url: `api/users/${userId}`,
//     })
// }

export const fetchAllUsers = () => {
    debugger
    return $.ajax ({
        method: "GET",
        url: "api/users/",
    })
}

export const updateUser = (formData, currentUser) => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `api/users/${currentUser.id}`,
        data: formData,
        processData: false,
        contentType: false,
    })
}