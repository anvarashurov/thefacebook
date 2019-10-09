import React from 'react';
import { Link } from 'react-router-dom';

const CurrentUserNavbar = ({currentUser}) => {
    // debugger
    return (
        <div className="main_nav">
            <div className="profile_nav">
                <a href="/">
                <span className="profile_nav_logo">
                    {/* here goes facebook's F logo */}
                    <img src={window.facebookIcon} alt="facebook logo"/>
                </span>
                </a>
                <div className="profile_nav_search">
                    <form action="GET">
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
                                <img src={window.questionIcon} alt="tiny profile picture"/>
                            </span>
                        </Link>
                            <a href={`#users/${currentUser.id}`}>
                            <span className="user_first_name">
                                {/* Name of person */}
                                {currentUser.first_name}
                            </span>
                        </a>
                    </div>
                    <div className="profile_nav_home_find_create">
                        <span className="home">
                            <a href="#">Home</a>
                        </span>
                        <span className="find_friends">
                            <a href="#">Find Friends</a></span>
                        <span className="create">
                            <a href="#">Create</a>
                        </span>
                    </div>
                    <div className="friends_messages_nots">
                        <span> 
                            <a href="#">
                                <img src={window.friendIcon} alt="friends icon"/>
                            </a>
                        </span>
                        <span> 
                            <a href="#">
                                <img src={window.messageIcon} alt="messages icon"/>
                            </a>
                        </span>
                        <span className="not"> 
                            <a href="#">
                                <img src={window.notIcon} alt="nots icon"/>
                            </a>
                        </span>
                    </div>
                    <div className="question_and_more">
                        <span className="question"> 
                            <a href="#">
                                <img src={window.questionIcon} alt="question icon"/>
                            </a>
                        </span>
                        <span className="dropdown"> 
                            <a href="#">
                                <img src={window.dropdownIcon} alt="drop down icon"/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentUserNavbar;