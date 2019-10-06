import { fetchUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Profile from './Profile';
// What do we need in our Profile Presentational component?

// all the info about current user... fetch user?

// debugger

const mapStateToProps = state => {
    // debugger
    return {
    currentUser: Object.values(state.entities.users[state.session.currentUserId])
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);