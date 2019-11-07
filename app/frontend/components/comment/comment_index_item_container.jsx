// what do we need inside comment_index component?

// fetch all comments

// owner of comment

import { connect } from 'react-redux';
import CommentIndex from './comment_index';

import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments),
        commentOwner: state.entities.users[state.session.currentUserId],
        postId: ownProps.postId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);