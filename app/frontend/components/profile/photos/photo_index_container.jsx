import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { updateUser } from '../../../util/user_api_util';
import PhotoIndex from './photo_index';
//  To show all photos, I do not need anything but User object
//  which has photoUrls key pointing to all of the URLs for photos
//  they uploaded.
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
    debugger 
    let onlyNine= null;
    if(ownProps.onlyNine) {
        onlyNine = ownProps.onlyNine;
    }
    return {
        profileOwner: state.entities.users[parseInt(ownProps.location.pathname.slice(7))],
        onlyNine,
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mdp = dispatch => {
    return {
        openModal: (str) => dispatch(openModal(str)),
    }
}

export default withRouter(connect(msp, mdp)(PhotoIndex));