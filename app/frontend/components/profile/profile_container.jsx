import { fetchUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
// debugger
const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);