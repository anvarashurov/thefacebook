import React from 'react';

const FriendItem = (props) => {
    
    return(
        <>
            <div>
                <span>
                    <img src={props.user.profilePhotoUrl} alt="Photo" />
                </span>
                <span>
                    status: {props.status}
                </span>
            </div>
        </>
    )
}

export default FriendItem;