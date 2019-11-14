import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import LandingPage from './landing_page';
import { showDropdown } from '../../actions/dropdowns_actions';

const mapStateToProps = state => { 
    return {
        currentUser: state.entities.users[state.session.currentUserId] 
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    // TODO: understand
    showDropdown: (comp, id) => dispatch(showDropdown(comp, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);