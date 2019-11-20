import React from 'react';
import EditProfileContainer from '../profile/edit_profile/edit_profile_container';
import CreatePostContainer from '../post/create_post_container';
import EditPostFormContainer from '../post/edit_post_form_container';
import UploadPhotoContainer from '../profile/photos/upload_photo_container';
import ViewImage from '../profile/photos/view_photo';

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
                if(this.props.homepageModalClass) {
                    component = (
                        <div className="create_post_modal_homepage" onClick={e => e.stopPropagation()}>
                            <CreatePostContainer profileOwner={this.props.profileOwner} currentUser={this.props.currentUser} />
                        </div>
                    )    
                } else {
                    component = (
                        <div className="create_post_modal" onClick={e => e.stopPropagation()}>
                            <CreatePostContainer profileOwner={this.props.profileOwner} currentUser={this.props.currentUser} />
                        </div>
                    )
                }
                break;
            case 'edit_post':
                component = (
                    <div className="edit_post_modal" onClick={e => e.stopPropagation()}>
                        <EditPostFormContainer post={this.props.modal.post} />
                    </div>
                )
                break;
            case 'upload_photos':
                component = (
                    <div className="upload_photos_modal" onClick={e => e.stopPropagation()}>
                        <UploadPhotoContainer />
                    </div>
                )
                break;
            case 'view_image':
                // debugger
                component = (
                    <div className="view_image_modal" onClick={e => e.stopPropagation()}>
                        <ViewImage imageUrl={this.props.modal.imageUrl} closeModal={this.props.closeModal}/>
                    </div>
                )
                break
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