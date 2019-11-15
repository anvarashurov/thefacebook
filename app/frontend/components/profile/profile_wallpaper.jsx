import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileWallpaper = ({ profileOwner, currentUser, createFriendRequest, openModal }) => {

    let buttonText = "Add Friend"
 
    currentUser.friendRequestSentToIds.forEach((friendSentArr) => {
        if(friendSentArr[0] === profileOwner.id) {
            buttonText = friendSentArr[1];
        }
    })

    const [friendText, setFriendText] = useState(buttonText);

    function handleClick() {
        return (e) => {
            if(friendText === 'Add Friend') {
                createFriendRequest(currentUser.id, profileOwner.id).then(() => setFriendText('PENDING'));      
            }
        }
    }

    let editProfileOrAddFriend;

    if(profileOwner.id === currentUser.id) {
        editProfileOrAddFriend = (
            <button onClick={()=> openModal({type: "edit_profile", profileOwner: null})}>Update Profile</button>
        )
    } else {
        editProfileOrAddFriend = (
            <button onClick={handleClick()}>
                {friendText}
            </button>
        )
    }

    return (
        <div className="body_content">
            <div className="wallpaper_container">
                <img src={profileOwner.coverPhotoUrl} alt="wallpaper" style={{width:'851px', height:'328px'}}/>
            </div>
            <div className="wallpaper_overlay">
                <div className="picture_and_name">
                    <div className="profile_picture">
                        <img src={profileOwner.profilePhotoUrl} alt="profile picture" style={{ width: '168px', height: '168px' }} />
                    </div>
                    <div className="profile_name">
                        <Link to={`/users/${profileOwner.id}/`}>{profileOwner.first_name + " " + profileOwner.last_name}</Link>
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
                        <Link to={`/users/${profileOwner.id}`}>
                            Timeline 
                            <img src={window.dropdownIcon} alt="dropdown"/>
                        </Link>
                    </li>
                    <li className="about">
                        <Link to={`/users/${profileOwner.id}/about`}>About</Link>
                        <span className="triangle"></span>
                    </li>
                    <li className="friends">
                        <a href="#">Friends</a>
                    </li>
                    <li className="photos">
                        <a href="#">Photos</a>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default ProfileWallpaper;