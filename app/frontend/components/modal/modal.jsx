import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';
import CreatePostContainer from '../post/create_post_container';
// import ViewPhoto from '../profile/view_photo';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch(modal) {
        case 'edit_profile':
            component = (
                <div className="edit_profile_modal" onClick={e => e.stopPropagation()}>
                    <EditProfileContainer />
                </div>
            )
            break;
        case 'create_post':
            component = ( 
                <div className="create_post_modal" onClick={e => e.stopPropagation()}>
                    <CreatePostContainer />
                </div>
            )
            break;
        default:
            return null;    
    }
    // if(modal === 'edit_profile') {
    //     
    //     component = <EditProfileContainer />
    // } else {
    //     
    //     return null;
    // }

    return (
        <div className="modal_background" onClick={closeModal}>
            {/* <div className="modal_child" onClick={e => e.stopPropagation()}>
                {component}
            </div> */}
            {component}
        </div>
    );
}

export default Modal;