import { connect } from 'react-redux';
import FriendIndex from './friend_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    let friends = [];

    // debugger

    let profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];

    profileOwner.friendRequestSentToIds.forEach((arr) => {
        // debugger
        if (arr[1] === "APPROVED") {
            friends.push(state.entities.users[arr[0]]);
        }
    })

    profileOwner.friendRequestReceivedFromIds.forEach(arr => {
        // debugger
        if (arr[1] === "APPROVED") {
            friends.push(state.entities.users[arr[0]]);
        }
    })
// debugger

    let onlyNine = null;

    if(ownProps.onlyNine) {
        onlyNine = ownProps.onlyNine
    }

    return {
        // users: Object.values(state.entities.users),
        profileOwner,
        friends,
        onlyNine,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendIndex));