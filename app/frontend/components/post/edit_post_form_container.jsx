import { deletePost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        post: state.entities.posts[ownProps.postId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePost: post => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);