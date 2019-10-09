import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LandingPage from './landing_page';

//currentUser: state.entities.users[Object.keys(state.entities.users).slice(-1)[0]]
//or just .pop()

const mapStateToProps = state => {
    // find currentuser from list of users. 
    return { currentUser: state.entities.users[state.session.currentUserId] }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);