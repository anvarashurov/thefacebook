import { connect } from 'react-redux';
import Modal from './modal'
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        profileOwner: state.entities.users[parseInt(ownProps.location.pathname.slice(7))],
        currentUser: state.entities.users[state.session.currentUserId],
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));