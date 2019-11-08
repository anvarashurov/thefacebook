import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileWallpaper = ({ profileOwner, currentUser, createFriendRequest, openModal }) => {

    let buttonText = "Add Friend"
 
    currentUser.friendRequestSentToIds.forEach((friendSentArr) => {
        if(friendSentArr[0] === profileOwner.id) {
            buttonText = friendSentArr[1];
        }
    })

    // testing new brach commits
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
            // <Link to={`/users/${profileOwner.id}/about/edit`}>
            //     <img src={window.edit} alt="log" />
            //     Edit Profile
            // </Link>

            <button onClick={()=> openModal("edit_profile") }>Update Profile</button>

        )
    } else {
        editProfileOrAddFriend = (
            // () => createFriendRequest(currentUser.id, profileOwner.id)
            <button onClick={handleClick()}>
                {friendText}
            </button>
        )
    }

    return (
        <div className="body_content">
            <div className="wallpaper_container">


                {/* <img className="camera_icon" src={window.camera} alt="camera" style={{width: '26px', height: '21px'}}/> */}
                
                {/* {window.wallpaper} */}
                <img src={currentUser.coverPhotoUrl} alt="wallpaper" style={{width:'851px', height:'328px'}}/>
            </div>
            <div className="wallpaper_overlay">
                <div className="picture_and_name">
                    <div className="profile_picture">
                        {/* {window.profile} */}
                        <img src={currentUser.profilePhotoUrl} alt="profile picture" style={{ width: '168px', height: '168px' }} />
                    </div>
                    <div className="profile_name">
                        <Link to={`/users/${profileOwner.id}/`}>{profileOwner.first_name + " " + profileOwner.last_name}</Link>
                    </div>
                </div>
                <div className="edit_log_button">
                    <div className="edit_profile_log_container">
                        <div className="edit_profile_container">
                            {/* <Link to={`/users/${profileOwner.id}/about/edit`}>
                                <img src={window.edit} alt="log" />
                                {editProfile}
                            </Link> */}
                            {editProfileOrAddFriend}
                        </div>
                        {/* <div className="activity_log">
                            <Link to={`/users/${profileOwner.id}/about/edit`}>
                                <img src={window.edit} alt="log"/>
                                Edit Profile
                            </Link> */}
                            {/* <button>
                                <img src={window.edit} alt="..."/>
                                ...
                            </button> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className="bar">
                <ul>
                    <li className="timeline">
                        {/* <a href="#"> */}
                        <Link to={`/users/${profileOwner.id}`}>
                            Timeline 
                            <img src={window.dropdownIcon} alt="dropdown"/>
                        </Link>
                        {/* </a> */}
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
                    {/* <li className="archive">
                        <a href="#">
                            <img src={window.dropdownIcon} alt="lock" />
                            Archive
                        </a>
                    </li>
                    <li className="more">
                        <a href="#">
                            More
                            <img src={window.dropdownIcon} alt="dropdown"/>
                        </a>
                    </li> */}
                </ul>
            </div> 
        </div>
    )
}

export default ProfileWallpaper;