import { connect } from 'react-redux';
import FriendIndex from './friend_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    let friends = [];

    let profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];

    profileOwner.friendIds.forEach((friendId) => {
        friends.push(state.entities.users[friendId]);
    })

    let onlyNine = null;

    if(ownProps.onlyNine) {
        onlyNine = ownProps.onlyNine
    }

    return {
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