import { connect } from 'react-redux';
import Modal from './modal'
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    
    let currentUser = state.entities.users[state.session.currentUserId];
    let profileOwner = state.entities.users[parseInt(ownProps.location.pathname.slice(7))];
    // this is when modal is opened from Homepage
    // Homepage can not handle userId from URL since it is '/'
    // thus we gotta get a bit ... 
    let homepageModalClass = null;
    if(typeof profileOwner === 'undefined') {
        profileOwner = currentUser;
        homepageModalClass = "_homepage";
    }
    
    return {
        profileOwner,
        currentUser,
        modal: state.ui.modal,
        homepageModalClass,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));