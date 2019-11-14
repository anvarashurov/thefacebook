import { deletePost, updatePost } from '../../actions/post_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import EditPostForm from './edit_post_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
    // debugger

    let post = state.ui.modal.post;
    let author = state.entities.users[post.authorId];

    return {
        post,
        author,
    }
}

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        updatePost: post => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostForm));