import {fetchPosts, createPost, deletePost} from '../../actions/post_actions';
import { connect } from 'react-redux';
import CreatePost from './create_post';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
        
    let currentUser = state.entities.users[state.session.currentUserId];
    
    let profileOwner;

    if(typeof ownProps.profileOwner !== 'undefined'){
        profileOwner = ownProps.profileOwner;
    } else {
        profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];
    }

    return {
        currentUser,
        profileOwner,
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
        updateUser: (user) => dispatch(updateUser(user))
    }        
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));