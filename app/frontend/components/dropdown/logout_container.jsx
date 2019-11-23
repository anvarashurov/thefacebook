import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { hideDropdown } from '../../actions/dropdowns_actions';

class LogoutContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        // this.state = {clicked: false};
    }

    //  TODO: Click out side 

    handleLogout() {
        this.props.hideDropdown();
        return this.props.logout();
    }

    render() {
        return (
            <button id="logout_button" onClick={this.handleLogout}>
                Log out
            </button>
        )
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        hideDropdown: () => dispatch(hideDropdown()),
    }
}

export default connect(null, mdp)(LogoutContainer);