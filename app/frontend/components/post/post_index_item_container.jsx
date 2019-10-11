import { connect } from 'react-redux';

import PostIndex from './post_index';
import {fetchPost, fetchPosts, deletePost} from '../../actions/session_actions';

const mapStateToProps = (state, postOwner) => {
    let owner;
    if(typeof postOwner.postOwner.id !== 'undefined') {
        owner = postOwner.postOwner.id;
    } else {
        owner = postOwner.postOwner;
    }

    // debugger
    return {
        posts: Object.values(state.entities.posts),
        postOwner: state.entities.users[owner],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);