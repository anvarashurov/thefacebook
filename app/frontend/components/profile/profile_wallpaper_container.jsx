import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createFriendRequest, deleteFriendRequest } from '../../actions/friend_actions';
import ProfileWallpaper from './profile_wallpaper';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {

    let profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];
    let currentUser = state.entities.users[state.session.currentUserId];

    let text = "Add Friend";
    currentUser.friendRequestSentToIds.forEach((friendSentArr) => {
        if (friendSentArr[0] === profileOwner.id) {
            switch (friendSentArr[1]) {
                case 'PENDING':
                    text = "Remove Request";
                    break;
                case 'APPROVED':
                    text = "Remove Friend";
                    break;
            }
        }
    })

    debugger
    return {
        profileOwner,
        currentUser,
        text,
    }
}

const mdp = dispatch => {
    return {
        createFriendRequest: (user1, user2) => dispatch(createFriendRequest(user1, user2)),
        // updateFriendRequest: (user1, user2) => dispatch(updateFriendRequest(user1, user2)),
        deleteFriendRequest: (user1, user2) => dispatch(deleteFriendRequest(user1, user2)),
        openModal: (str) => dispatch(openModal(str)),
    }
}

export default withRouter(connect(msp, mdp)(ProfileWallpaper));