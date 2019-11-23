import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import {withRouter} from 'react-router-dom';
import {fetchAllUsers} from '../../actions/user_actions';
import {fetchAllLikes } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {

    const allLikesArr = Object.values(state.entities.likes).filter(like => {
        return like.likeableType === 'Post';
    });
    let currentUser = state.entities.users[state.session.currentUserId];
    let posts = Object.values(state.entities.posts);
    
    
    let postsToShowArr = [];
    let profileOwner;
    let source;

    if(ownProps.source === 'homepage') {     
        // Current User Friends Posts
        profileOwner = currentUser;
        for (let i = 0; i < posts.length; i++) {
            if (currentUser.friendIds.includes(posts[i].authorId)) {
                postsToShowArr.push(posts[i]);
            }
        }
        source = 'homepage';
    } else {
        // Profile Owner posts
        profileOwner = state.entities.users[parseInt(ownProps.match.path.slice(7))];
        let myId = parseInt(profileOwner.id); 

        for (let i = 0; i < posts.length; i++) {
            if ((posts[i].authorId === myId && posts[i].receiverId === myId) ||
                (posts[i].receiverId === myId && posts[i].authorId !== myId)) {
                postsToShowArr.push(posts[i]);
            }
        }       
    }

    return {
        currentUser,
        profileOwner,
        postsToShowArr,
        allUsersArr: Object.values(state.entities.users),
        allUsersObj: state.entities.users,
        allLikesArr,
        source,
   }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));