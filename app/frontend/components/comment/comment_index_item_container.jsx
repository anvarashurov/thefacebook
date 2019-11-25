import { connect } from 'react-redux';
import CommentIndex from './comment_index';

import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    
    let postComments = [];
    let postAuthors = [];

    const allLikesArr = Object.values(state.entities.likes).filter(like => {
        return like.likeableType === 'Comment';
    });

    let comments = Object.values(state.entities.comments);
    let post = state.entities.posts[ownProps.postId];
    
    for(let i = 0; i < comments.length; i++) {
        if(post.commentIds.includes(comments[i].id)) {
            postComments.push(comments[i]);
            postAuthors.push(state.entities.users[comments[i].authorId]);
        }
    }

    
    return {
        postComments,
        postAuthors,
        allLikesArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);