import React from 'react';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';
import CreatePostContainer from '../post/create_post_container';
import EditPostFormContainer from '../post/edit_post_form_container';

const Modal = ({ modal, closeModal }) => {
    debugger
    if (!modal) {
        debugger
        return null;
    }
    let component;
    switch(modal.type) {
        case 'edit_profile':
            debugger
            component = (
                <div className="edit_profile_modal" onClick={e => e.stopPropagation()}>
                    <EditProfileContainer />
                </div>
            )
            break;
        case 'create_post':
            debugger
            component = ( 
                <div className="create_post_modal" onClick={e => e.stopPropagation()}>
                    <CreatePostContainer />
                </div>
            )
            break;
        case 'edit_post':
            debugger
            component = (
                <div className="edit_post_modal" onClick={e => e.stopPropagation()}>
                    <EditPostFormContainer post={modal.post}/>
                </div>
            )
            debugger
            break;
        default:
            debugger
            return null;    
    }

    debugger

    return (
        <div className="modal_background" onClick={closeModal}>
            {component}
        </div>
    );
}

export default Modal;