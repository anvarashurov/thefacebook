import React from 'react';
import FriendItem from './friend_item';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        return this.props.fetchAllUsers();
    }

    render() {

        debugger

        if(this.props.users.length === 1) {
            return null;
        }

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

        const allFriendships = this.props.friendReceived.map((arr) => {
            
            return <FriendItem 
                user = {arr[0]}
                status={arr[1]} 
                />

        })

        debugger

        return (
            {allFriendships}
        )
    }
}

export default Friend;