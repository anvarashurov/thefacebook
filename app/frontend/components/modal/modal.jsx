import React from 'react';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';
import CreatePostContainer from '../post/create_post_container';

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

    return (
        <div className="modal_background" onClick={closeModal}>
            {component}
        </div>
    );
}

export default Modal;