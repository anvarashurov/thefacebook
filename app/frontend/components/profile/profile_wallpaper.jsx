import React from 'react';
import {Link} from 'react-router-dom';

class ProfileWallpaper extends React.Component {
    
    constructor(props) {
        // TODO: Why is this not being hit the first time someone's profile gets pulled? QUESTION
        debugger
        super(props);
        this.state = this.props.text;
        this.handleFriendOp = this.handleFriendOp.bind(this);
    }
 
    handleFriendOp() {
            if(this.state.buttonText === 'Add Friend') {
                debugger
                this.props.createFriendRequest(this.props.currentUser.id, this.props.profileOwner.id).then(() => this.setState('Remove Request'));      
            } else if(this.state.buttonText === 'Remove Request') {
                debugger
                this.props.deleteFriendRequest(this.props.currentUser.id, this.props.profileOwner.id).then(() => this.setState('Add Friend'));
            } else {
                // they are friends
                debugger
                this.props.deleteFriendRequest(this.props.currentUser.id, this.props.profileOwner.id).then(() => this.setState('Add Friend' ));
            }
    }

    render() {

        debugger
        
        let editProfileOrAddFriend;

        if (this.props.profileOwner.id === this.props.currentUser.id) {
            editProfileOrAddFriend = (
                <button onClick={() => this.props.openModal({ type: "edit_profile", profileOwner: null })}>Update Profile</button>
            )
        } else {
            debugger
            editProfileOrAddFriend = (
                <button onClick={this.handleFriendOp}>
                    {this.state}
                </button>
            )
        }

        return (
            <div className="body_content">
                <div className="wallpaper_container">
                    <img src={this.props.profileOwner.coverPhotoUrl} alt="wallpaper" style={{width:'851px', height:'328px'}}/>
                </div>
                <div className="wallpaper_overlay">
                    <div className="picture_and_name">
                        <div className="profile_picture">
                            <img src={this.props.profileOwner.profilePhotoUrl} alt="profile picture" style={{ width: '168px', height: '168px' }} />
                        </div>
                        <div className="profile_name">
                            <Link to={`/users/${this.props.profileOwner.id}/`}>{this.props.profileOwner.first_name + " " + this.props.profileOwner.last_name}</Link>
                        </div>
                    </div>
                    <div className="edit_log_button">
                        <div className="edit_profile_log_container">
                            <div className="edit_profile_container">
                                {editProfileOrAddFriend}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar">
                    <ul>
                        <li className="timeline">
                            <Link to={`/users/${this.props.profileOwner.id}`}>
                                Timeline 
                                <img src={window.dropdownIcon} alt="dropdown"/>
                            </Link>
                        </li>
                        <li className="about">
                            <Link to={`/users/${this.props.profileOwner.id}/about`}>About</Link>
                            <span className="triangle"></span>
                        </li>
                        <li className="friends">
                            <Link to={`/users/${this.props.profileOwner.id}/friends`}>Friends</Link>
                        </li>
                        {/* TODO make it more general wrapping with DIV tags */}
                        <li className="photos">
                            <Link to={`/users/${this.props.profileOwner.id}/photos`}>Photos</Link>
                        </li>
                    </ul>
                </div> 
            </div>
        )
    }
}

export default ProfileWallpaper;