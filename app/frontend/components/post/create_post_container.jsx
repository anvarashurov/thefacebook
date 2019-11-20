import {fetchPosts, createPost, deletePost} from '../../actions/post_actions';
import { connect } from 'react-redux';
import CreatePost from './create_post';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    
    // debugger
    
    let currentUser = state.entities.users[state.session.currentUserId];
    
    let profileOwner;

    if(typeof ownProps.profileOwner !== 'undefined'){
        debugger
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
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));