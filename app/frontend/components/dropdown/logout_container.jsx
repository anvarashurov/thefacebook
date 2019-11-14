import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class LogoutContainer extends React.Component {

    // TODO: Write handleLogout function that 
    // hides dropdown and logs out.

    render() {
        debugger
        return (
            <button onClick={this.props.logout}>
                Log out
            </button>
        )
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(null, mdp)(LogoutContainer);