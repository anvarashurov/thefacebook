import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, postOwner) => {
    
    let owner;
    
    typeof postOwner.postOwner.id !== 'undefined' ? owner = postOwner.postOwner.id : owner = postOwner.postOwner;

    return {
        posts: Object.values(state.entities.posts),
        postOwner: state.entities.users[owner],
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (str) => dispatch(openModal(str)),
    // openModal: () => (str) => dispatch(openModal(str)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);