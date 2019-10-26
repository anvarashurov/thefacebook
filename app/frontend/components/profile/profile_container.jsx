import { fetchPosts, fetchPost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';

import { connect } from 'react-redux';
import Profile from './profile';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        // users: state.entities.users,
        currentUser: state.entities.users[state.session.currentUserId],
        profileOwner: state.entities.users[ownProps.match.params.id]
    }   
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
