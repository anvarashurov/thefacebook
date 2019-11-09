export const fetchAllUsers = () => {
    return $.ajax ({
        method: "GET",
        url: "api/users/",
    })
}

export const updateUser = (formData, currentUser) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${currentUser.id}`,
        data: formData,
        processData: false,
        contentType: false,
    })
}