import { fetchPosts, fetchPost, deletePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
        return {
        currentUser: state.entities.users[state.session.currentUserId],
        profileOwner: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => ({
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);