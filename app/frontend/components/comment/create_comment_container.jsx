import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const comment = {
        content: '',
        post_id: ownProps.postId,
        author_id: state.session.id
    };

    return {
        comment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: comment => dispatch(createComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);