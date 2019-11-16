import React from 'react';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';
import CreatePostContainer from '../post/create_post_container';
import EditPostFormContainer from '../post/edit_post_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (!this.props.modal) {
            return null;
        }

        let component;
        
        switch (this.props.modal.type) {
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
                        <CreatePostContainer profileOwner={this.props.profileOwner} currentUser={this.props.currentUser} />
                    </div>
                )
                break;
            case 'edit_post':
                component = (
                    <div className="edit_post_modal" onClick={e => e.stopPropagation()}>
                        <EditPostFormContainer post={this.props.modal.post} />
                    </div>
                )
                break;
            default:
                return null;
        }
   
    return (
        <div className="modal_background" onClick={this.props.closeModal}>
            {component}
        </div>
    );
    }
}

export default Modal;