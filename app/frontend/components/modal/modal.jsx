import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    if(modal === 'edit_profile') {
        debugger
        component = <EditProfileContainer />
    } else {
        debugger
        return null;
    }

    return (
        <div className="modal_background" onClick={closeModal}>
            <div className="modal_child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;