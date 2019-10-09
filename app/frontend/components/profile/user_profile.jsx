import React from 'react';
import CurrentUserNavbar from './current_user_navbar';
import ProfileWallpaper from './profile_wallpaper';
import OwnerBio from './owner_bio';
// import CreatePost from '../post/CreatePost';
import CreatePostContainer from '../post/CreatePostContainer';
debugger
class UserProfile extends React.Component {
    render() {
        debugger
        return (
            <div className="main_container">
                <ProfileWallpaper profileOwner={this.props.currentUser} currentUser={this.props.currentUser} />
                <div className="profile_lower_body">
                    {/* this is where routing goes */}
                    <OwnerBio currentUser={this.props.currentUser} />
                    <CreatePostContainer currentUser={this.props.currentUser} />
                </div>
                <button onClick={this.props.logout}>Log out for good</button>
            </div>
        )
    }
}

export default UserProfile;