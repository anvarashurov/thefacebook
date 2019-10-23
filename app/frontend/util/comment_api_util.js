export const createComment = comment => {
    // debugger
    return $.ajax({
        method: "POST",
        url: 'api/comments',
        data: { comment: comment }
    })
}

export const fetchComment = (commentId) => {
    return $.ajax({
        method: "GET",
        url: `api/comments/${commentId}`,
    })
}

export const fetchComments = () => {
    return $.ajax({
        method: "GET",
        url: `api/comments/`,
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        method: "PATCH",
        url: `api/comments/${comment.id}`,
        data: comment,
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${commentId}`,
    })
}