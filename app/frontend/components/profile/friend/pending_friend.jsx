import React from 'react';
import FriendItem from './pending_friend_item';

class PendingFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if( typeof this.props.friendReceived === 'undefined') {
            return null;
        }
        const allFriendships = this.props.friendReceived.map((user, idx) => {
                return <FriendItem key={idx}
                    user = {user ? user : null}
                    updateFriendRequest={this.props.updateFriendRequest}
                    deleteFriendsRequest={this.props.deleteFriendsRequest}
                    currentUser={this.props.currentUser}
                    />
        })

        return (
            <div className="friendship_tab">
                <div className="friendship_tab_text">
                    <span>
                        Friend Requests
                    </span> 
                </div>
                {allFriendships}
            </div>
        )
    }
}

export default PendingFriend;