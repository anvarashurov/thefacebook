import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger

    //  The fuck is the point of PostOwner?
    // let owner;
    
    // typeof ownProps.postOwner.id !== 'undefined' ? owner = ownProps.postOwner.id : owner = ownProps.postOwner;

    return {
        //  TODO adding ownProps instead of postOwner in Args. Also see if this is legit.
        profileOwner: state.entities.users[parseInt(ownProps.match.path.slice(7))],
        currentUser: state.entities.users[state.session.currentUserId],
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        
        // postOwner: state.entities.users[owner],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (str) => dispatch(openModal(str)),
    // openModal: () => (str) => dispatch(openModal(str)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));