import {fetchPosts, createPost, deletePost} from '../../actions/post_actions';
import { connect } from 'react-redux';
import CreatePost from './create_post';
import { openModal, closeModal } from '../../actions/modal_actions';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    
    debugger
    
    let currentUser;

    if(typeof ownProps.currentUser !== 'undefined'){
        currentUser = ownProps.currentUser;    
    } else {
        currentUser = state.entities.users[state.session.currentUserId];
    }

    return {
        currentUser,
        profileOwner: ownProps.profileOwner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: postId => dispatch(fetchPost(postId)),
        createPost: post => dispatch(createPost(post)),
        deletePost: postId => dispatch(deletePost(postId)),
        openModal: (str) => dispatch(openModal(str)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);