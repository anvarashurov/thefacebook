import { updateFriendRequest, deleteFriendReqest } from '../../../actions/friend_actions';
         
import { fetchAllUsers } from '../../../actions/user_actions';

import { connect } from 'react-redux';
import Friend from './friend';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    
    let friendReceived = [];
    
    // currentUser.friendRequestSentToIds.forEach((arr) => {
    //     debugger
    //     friendSent.push([state.entities.users[arr[0]], arr[1]]);
    // })

    
    currentUser.friendRequestReceivedFromIds.forEach( arr => {
        debugger
        friendReceived.push([state.entities.users[arr[0]], arr[1]]);
    })

    return {
        currentUser: state.entities.users[state.session.currentUserId],
        // profileOwner: state.entities.users[ownProps.match.params.id],
        users: Object.values(state.entities.users),
        // friendSent,
        friendReceived,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFriendRequest: (user1, user2) => dispatch(updateFriendRequest(user1, user2)),
        deleteFriendRequest: (user1, user2) => dispatch(deleteFriendRequest(user1, user2)),        
        fetchAllUsers: () => dispatch(fetchAllUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);