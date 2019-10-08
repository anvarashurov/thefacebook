import {fetchPosts, fetchPost, createPost, deletePost} from '../../actions/session_actions';
import { connect } from 'react-redux';
import CreatePost from './CreatePost';

const mapStateToProps = state => {
    // debugger
    return {
    currentUser: Object.values(state.entities.users[state.session.currentUserId]),
    // post: {content: ""}
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