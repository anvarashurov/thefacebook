import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../../actions/session_actions';
import UploadPhoto from './upload_photo';
import {openModal, closeModal} from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
    // 
    let profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];
    return {
        profileOwner,
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mdp = dispatch => {
    //  
    return {
        updateUser: (formData, currentUser) => dispatch(updateUser(formData, currentUser)),
        closeModal: () => dispatch(closeModal()),
        openModal: (str) => dispatch(openModal(str)),
    }
}

export default withRouter(connect(msp, mdp)(UploadPhoto));