import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {fetchAllUsers} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    
    let currentUser = state.entities.users[state.session.currentUserId];
    let profileOwner;
    
    let posts = Object.values(state.entities.posts);
    let postsToShow = [];
    let source;

    if(ownProps.source === 'homepage') {     
        // only show friend's last several posts
        profileOwner = currentUser;
        for (let i = 0; i < posts.length; i++) {
            if (currentUser.friendIds.includes(posts[i].authorId)) {
                postsToShow.push(posts[i]);
            }
        }
        source = 'homepage';
    } else {
        // otherwise, keep on with your posts
        profileOwner = state.entities.users[parseInt(ownProps.match.path.slice(7))];
        let myId = parseInt(profileOwner.id); 

        for (let i = 0; i < posts.length; i++) {
            if ((posts[i].authorId === myId && posts[i].receiverId === myId) ||
                (posts[i].receiverId === myId && posts[i].authorId !== myId)) {
                postsToShow.push(posts[i]);
            }
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
        postsToShow,
        users: Object.values(state.entities.users),
        source,
        
        // postOwner: state.entities.users[owner],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openModal: (str) => dispatch(openModal(str)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    // openModal: () => (str) => dispatch(openModal(str)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));