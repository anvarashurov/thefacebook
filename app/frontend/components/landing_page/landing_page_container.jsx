import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import LandingPage from './landing_page';

const mapStateToProps = state => { 
    return { currentUser: state.entities.users[state.session.currentUserId] }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);