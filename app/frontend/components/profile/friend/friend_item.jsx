import React from 'react';

const FriendItem = (props) => {
    
    return(
        <>
            <div className="single_friend">
                <span className="friend_img_container">
                    <img src={props.user.profilePhotoUrl} alt="Photo" style={{height: '50px', width: '50px'}}/>
                </span>
                <span className="user_full_name">
                    <a href="#">
                        <span>
                            {props.user.first_name + " "}
                        </span>
                        <span>
                            {props.user.last_name}
                        </span>
                    </a>
                </span>
                {/* <span className="friend_status">
                    status: {props.status}
                </span> */}
                <button> Add Friend </button>
                <button> Remove </button>
            </div>
        </>
    )
}

export default FriendItem;