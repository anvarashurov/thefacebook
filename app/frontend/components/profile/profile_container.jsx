import { fetchUser, fetchPosts, fetchPost, deletePost } from '../../actions/session_actions';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
// debugger
const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId],
        profileOwner: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);