import React from 'react';
import Header from './Header';
import Wallpaper from './Wallpaper';
import Intro from './Intro';
import CreatePost from './CreatePost';
class Profile extends React.Component {

// facebook top header part

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    //     debugger
    // }

    render() {
        // debugger
        return (
            <div className="main_container">
                <Header currentUser={this.props.currentUser} logout={this.props.logout}/>
                <Wallpaper currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    <Intro currentUser={this.props.currentUser} />
                    <CreatePost currentUser={this.props.currentUser} />
                </div>
            </div>
        )
    }
}

export default Profile;