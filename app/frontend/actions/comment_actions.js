import * as APICommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const createComment = comment => dispatch => {
    debugger
    return APICommentUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
}
export const fetchComments = comments => dispatch => {
    return APICommentUtil.fetchComments(comments).then(comments => dispatch(receiveComments(comments)))
}
export const fetchComment = commentId => dispatch => {
    return APICommentUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
}
export const deleteComment = commentId => dispatch => {
    return APICommentUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment.id)))
}

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveComments = comments => ({
    type: RECEIVE_COMMENT,
    comments
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})