import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = ({currentUser, logout}) => {
    return (
        <div className="main_nav">
            <div className="profile_nav">
                <a href="/">
                    <span className="profile_nav_logo">
                        <img src={window.facebookIcon} alt="facebook logo"/>
                    </span>
                </a>
                <div className="profile_nav_search">
                    <form>
                        <input type="text" className="profile_nav_search" name="search" placeholder={currentUser.first_name + " " + currentUser.last_name}/>
                        <button>
                            <img src={window.questionIcon} />
                        </button>
                    </form>
                </div>
                <div className="profile_nav_navigation">
                    <div className="profile_icon_name_wrapper">
                        <Link to={`/users/${currentUser.id}`}>
                            <span className="profile_nav_image_icon">
                                <img src={currentUser.profilePhotoUrl} alt="tiny profile picture"/>
                            </span>
                        </Link>
                        <Link to={`/users/${currentUser.id}`}>
                            <span className="user_first_name">
                                {currentUser.first_name}
                            </span>
                        </Link>
                    </div>
                    <div className="profile_nav_home_find_create">
                        <span className="home">
                            <Link to={`/`}>Home</Link>
                        </span>
                    </div>
                    <div className="friends_messages_nots">
                        <span> 
                            <Link to={`/users/${currentUser.id}/`}> 
                                <img src={window.friendIcon} alt="friends icon"/>
                            </Link>
                        </span>
                        <span> 
                            <Link to={`/users/${currentUser.id}/`}>
                                <img src={window.messageIcon} alt="messages icon"/>
                            </Link>
                        </span>
                    </div>
                    <div className="question_and_more">
                        <span className="dropdown"> 
                            <Link to={`/users/${currentUser.id}/`}>
                                <img src={window.dropdownIcon} alt="drop down icon"/>
                            </Link>
                        </span>
                        <input type="submit" id="demo_button" value="L" className="login_button" onClick={logout}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNavbar;