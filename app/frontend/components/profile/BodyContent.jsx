import React from 'react';

const BodyContent = ({ currentUser }) => {
    return (
        <div className="body_content">
            <div className="wallpaper">
                <img src="#" alt="wallpaper"/>
            </div>
            <div className="wallpaper_overlay">
                <div className="profile_picture">
                    <img src="#" alt="profile picture"/>
                </div>
                <div className="profile_name">
                    <span>{currentUser[1] + " " + currentUser[2]}</span>
                </div>
                <div className="edit_profile_log_container">
                    <div className="edit_profile_container">
                        <a href="#">
                            <img src="" alt="edit_pen"/>
                            Edit
                        </a>
                    </div>
                    <div className="activity_log">
                        <a href="#">
                            <img src="" alt="log"/>
                            Log
                        </a>
                        <button>
                            <img src="" alt="..."/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bar">
                <ul>
                    <li>
                        <a href="#">
                            Timeline 
                            <img src="#" alt="dropdown"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Friends</a>
                    </li>
                    <li>
                        <a href="#">Photos</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="#" alt="lock" />
                            Archive
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            More
                            <img src="#" alt="dropdown"/>
                        </a>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default BodyContent;