import { connect } from 'react-redux';
// import PostDropdown from './post_dropdown';
// import { updatePost, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
// import { hideDropdown } from '../../actions/dropdowns_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        postId: ownProps.postId,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        // updatePost: post => dispatch(updatePost(post)),
        // deletePost: id => dispatch(deletePost(id)),
        openModal: modal => dispatch(openModal(modal)),
        hideDropdown: () => dispatch(hideDropdown())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDropdown);