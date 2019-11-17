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
    return {
        profileOwner: state.entities.users[parseInt(ownProps.location.pathname.slice(7))],
    }
}

const mdp = dispatch => {
    return {
        openModal: (str) => dispatch(openModal(str)),
    }
}

export default withRouter(connect(msp, mdp)(PhotoIndex));