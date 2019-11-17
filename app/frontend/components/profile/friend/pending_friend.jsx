import React from 'react';
import FriendItem from './pending_friend_item';

class PendingFriend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        // if(this.props.users.length === 1) {
        //     return null;
        // }

        // let allFriendships = [];
        
        // this.props.friendReceived.forEach( arr => {
        //     allFriendships.push(
        //         <div>
        //             <span>
        //                 <img src={arr[0].profilePhotoUrl} alt="Photo"/>
        //             </span>
        //             <span>
        //                 status: {arr[1]}
        //             </span>
        //         </div>
        //     )
        // })

    if( typeof this.props.friendReceived === 'undefined') {
        return null;
    }
        const allFriendships = this.props.friendReceived.map((arr, idx) => {
            // [ [user, status] ]
            // debugger
            return <FriendItem key={idx}
                user = {arr[0] ? arr[0] : null}
                // url = {arr[0] ? arr[0].profilePhotoUrl : null}
                status={arr[1]}
                updateFriendRequest={this.props.updateFriendRequest}
                deleteFriendsRequest={this.props.deleteFriendsRequest}
                currentUser={this.props.currentUser}
                />
        })
        // okay closing windows..
        
        // debugger
// my cpu is lagging
//  - Mr. Robert Ku ladies and gentlemen
        return (
            <div className="friendship_tab">
                <div className="friendship_tab_text">
                    <span>
                        Friend Requests
                    </span> 
                </div>
                {allFriendships}
                {/* <div>
                    People You Know Know
                #TODO
                </div> */}
                {/* <div>
                #TODO
                </div> */}
            </div>
        )
    }
}

export default PendingFriend;