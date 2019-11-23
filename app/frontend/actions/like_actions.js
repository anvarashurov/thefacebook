import * as APILikeUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = like => ({
    type: REMOVE_LIKE,
    like
})

export const fetchAllLikes = () => dispatch => {
    return APILikeUtil.fetchAllLikes().then((likes) => dispatch(receiveAllLikes(likes)));
}

export const createLike = like => dispatch => {
    return APILikeUtil.createLike(like).then((like) => dispatch(receiveLike(like)));
}

export const deleteLike = likeId => dispatch => {
    return APILikeUtil.deleteLike(likeId).then((like) => dispatch(removeLike(like)));
}