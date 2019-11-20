import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import {Link} from 'react-router-dom';

const PendingFriendItem = (props) => {

    return(

        <>
            <div className="single_friend">
                <div className="single_friend_left_child">
                    <span className="friend_img_container">
                        <Link to={`/users/${props.user.id}/`} >
                            <img src={props.user.profilePhotoUrl} alt="Photo" style={{height: '50px', width: '50px'}}/>                    
                        </Link>
                    </span>
                    <span className="user_full_name">
                        <Link to={`/users/${props.user.id}/`} >
                            <span>
                                {props.user.first_name + " "}
                            </span>
                            <span>
                                {props.user.last_name}
                            </span>
                        </Link>
                    </span>
                </div>
                <div className="single_friend_child_right">
                    {/* TODO CLOSE THE GODDAMN MODAL */}
                    <button id="add_friend_button" onClick={() => props.updateFriendRequest(props.currentUser.id, props.user.id).then( () => props.closeModal)}>
                        <span>
                            Add Friend
                        </span>
                    </button>
                    <button id="remove_friend_button" onClick={() => props.deleteFriendRequest(props.currentUser.id, props.user.id)}> 
                        <span>
                            Remove
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PendingFriendItem;