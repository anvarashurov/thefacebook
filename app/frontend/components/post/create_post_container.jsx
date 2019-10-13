import {fetchPosts, createPost, deletePost} from '../../actions/post_actions';
import { connect } from 'react-redux';
import CreatePost from './create_post';

const mapStateToProps = state => {
    return {
        currentUser: Object.values(state.entities.users[state.session.currentUserId]),
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: postId => dispatch(fetchPost(postId)),
        createPost: post => dispatch(createPost(post)),
        deletePost: postId => dispatch(deletePost(postId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);