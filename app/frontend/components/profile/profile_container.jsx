import { fetchAllUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import { createFriendRequest } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        users: Object.values(state.entities.users),
        currentUser: state.entities.users[state.session.currentUserId],
        profileOwner: state.entities.users[ownProps.match.params.id]
    }   
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchPosts: () => dispatch(fetchPosts()),
        createFriendRequest: (senderId, receiverId) => dispatch(createFriendRequest(senderId, receiverId)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);