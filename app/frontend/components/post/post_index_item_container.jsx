import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    
    // debugger 

    let currentUser = state.entities.users[state.session.currentUserId];
    let posts = Object.values(state.entities.posts);
    
    let profileOwner;

    if(typeof ownProps.profileOwner === 'undefined') {
        profileOwner = state.entities.users[parseInt(ownProps.match.path.slice(7))];
    } else {
        profileOwner = currentUser;
    }
    
    let myId = parseInt(profileOwner.id);
    let myPosts = [];
    let allPosts = posts;

    // TODO: Bruuh seriously? the fuck is the point of authoredPostIds???? Dumbass

    for (let i = 0; i < allPosts.length; i++) {
        if ((allPosts[i].authorId === myId && allPosts[i].receiverId === myId) || (allPosts[i].receiverId === myId && allPosts[i].authorId !== myId)) {
            myPosts.push(allPosts[i]);
        }
    }
    
    // debugger

    //  The fuck is the point of PostOwner?
    // let owner;
    
    // typeof ownProps.postOwner.id !== 'undefined' ? owner = ownProps.postOwner.id : owner = ownProps.postOwner;

    return {
        //  TODO adding ownProps instead of postOwner in Args. Also see if this is legit.
        profileOwner,
        currentUser,
        posts,
        myPosts,
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