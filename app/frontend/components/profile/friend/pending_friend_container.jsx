import { updateFriendRequest, deleteFriendReqest } from '../../../actions/friend_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { connect } from 'react-redux';
import PendingFriend from './pending_friend';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    
    let friendReceived = [];
    
    currentUser.friendRequestReceivedFromIds.forEach( senderId => {
        friendReceived.push(state.entities.users[senderId]);
    })

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        users: Object.values(state.entities.users),
        friendReceived,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFriendRequest: (user1, user2) => dispatch(updateFriendRequest(user1, user2)),
        deleteFriendRequest: (user1, user2) => dispatch(deleteFriendRequest(user1, user2)),        
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingFriend);