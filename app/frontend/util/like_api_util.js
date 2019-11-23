export const fetchAllLikes = () => {
    return $.ajax({
        method: "GET",
        url: "api/likes/",
    })
}

export const createLike = (like) => {
    // TODO recall what is the result with destructuring the object
    return $.ajax({
        method: "POST",
        url: `api/likes/`,
        data: { like },
    })
}

export const deleteLike = (likeId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${likeId}`,
    })
}