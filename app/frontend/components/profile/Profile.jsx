import React from 'react';
import Header from './Header';

class Profile extends React.Component{

// facebook top header part

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    //     debugger
    // }

    render() {
        // debugger
        return (
            <div className="main_container">
                <Header currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default Profile;