import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndexItemContainer from "../comment/comment_index_item_container";

import { openModal } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likerIds: this.props.likerIds,
            // postLikers: this.props.likers,
            // likeTag: "",
        }

        this.formatHour = this.formatHour.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    formatHour(date) {
        let allMonths = "January February March April May June July August September October November December".split(" ");
        let month = allMonths[date.getMonth()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = `${month} ${date.getDate()} at ${hours}:${minutes} ${ampm}`;
        return strTime;
    }

    handleLike() {
        // if user has liked then deleteLike
        if(this.props.post.likerIds.includes(this.props.currentUser.id)) {
                for(let i = 0; i < this.props.allLikes.length; i++) {
                if(this.props.allLikes[i].likerId === this.props.currentUser.id
                    && this.props.allLikes[i].likeableId === this.props.post.id) {
                                    this.props.deleteLike(this.props.allLikes[i].id);
                }
            }
        } 
        // if user has NOT liked, then createLike
        else {
            // let tempLikers = this.state.postLikers;
            return this.props.createLike({ likeable_id: this.props.post.id, likeable_type: 'Post' });
            // tempLikers.push(currentUser);
            // this.setState({postLikers: tempLikers});
            // return this.setState({post: this.props.post});
        }
    }

    render() {

        let likeIcon;
        if (this.props.post.likerIds.includes(this.props.currentUser.id)) {
            likeIcon = window.likeblue;
        } else {
            likeIcon = window.like
        }
        
        let commentsTag;
        const numComments = this.props.post.commentIds.length;

        if (numComments === 1) {
            commentsTag = numComments + " " + "Comment";
        } else if (numComments > 1) {
            commentsTag = numComments + " " + "Comments";
        }

        // likes counter
        const numLikes = this.props.post.likeIds.length;
        let likesTag;
        let others;
        let unlike = "Like"

        if(numLikes - 1 === 1) {
            others = "Other";
        } else {
            others = "Others";
        }

        if (numLikes === 1) {
                if(this.props.post.likerIds[0] === this.props.currentUser.id) {
                unlike = "Unlike";
                likesTag = (
                    <div className="like_count_container">
                        <img src={window.likecount} />
                        <span className="like_count_text">
                            You
                        </span>
                    </div>
                )
            } else {
                likesTag = (
                    <div className="like_count_container">
                        <img src={window.likecount} />
                        <span className="like_count_text">
                            1
                        </span>
                    </div>
                )
            }
        // numLikes + " " + "Like";
        } else if (numLikes > 1) {
            if (this.props.post.likerIds.includes(this.props.currentUser.id)) {
                unlike = "Unlike";
                likesTag = (
                    <div className="like_count_container">
                        <img src={window.likecount} />
                        <span className="like_count_text">
                            You and {numLikes - 1} {others}
                        </span>
                    </div>
                )
            } else {
                likesTag = (
                    <div className="like_count_container">
                        <img src={window.likecount} />
                        <span className="like_count_text">
                            {numLikes}
                        </span>
                    </div>
                )
            }
        }

        let timeOfPost = this.formatHour(new Date(this.props.post.extra));

        // this accounts for Post with Photo
        let url;
        if(this.props.post.photoURL) {
            url = (
                <button onClick={() => this.props.openModal({ type: 'view_image', imageUrl: this.props.post.photoURL })}>
                    <div className="post_image">
                        <img src={this.props.post.photoURL} alt="T" />
                    </div>
                </button>
            )
            
        }

        // this accounts for Edit or Delete Operation if post owner is specific user
        let postOptions;
        if(this.props.post.authorId === this.props.currentUser.id) {
            postOptions = (
            <div className="post_options">
                <button onClick={() => this.props.openModal({type: 'edit_post', post: this.props.post})}>
                    <img src={window.edit} alt=""/>
                </button>
                <button onClick={() => this.props.deletePost(this.props.post.id)}>
                    <img src={window.bin} alt=""/>
                </button>
            </div>
            )
        } else { 
            postOptions = null 
        }

        // Posting to other's wall
        let authors;
        let postAuthor;
        let postReceiver;
        
        if(this.props.post.receiverId !== this.props.post.authorId) {
            for(let i = 0; i < this.props.allUsersArr.length; i++) {
                if(this.props.allUsersArr[i].id === this.props.post.authorId) {
                                postAuthor = this.props.allUsersArr[i];
                }
                if(this.props.allUsersArr[i].id === this.props.post.receiverId) {
                    postReceiver = this.props.allUsersArr[i];
                }
            }
            authors = (
                <div className="authors">
                    <Link to={`/users/${postAuthor.id}`}>
                     {/* &#62; */}
                        <span className="post_author">{postAuthor.first_name + " " + postAuthor.last_name} </span>
                    </Link>
                    <img src={window.arrow} alt="" style={{width: '11px', height: '9px'}}/>
                    <Link to={`/users/${postReceiver.id}`}>
                        <span className="post_author">{postReceiver.first_name + " " + postReceiver.last_name}</span>
                    </Link>
                </div>
            )
            // TODO: CLICKING PROFILE PHOTO GETS ME TO THE PROFILE FFS
        } else {
            for (let i = 0; i < this.props.allUsersArr.length; i++) {
                if (this.props.allUsersArr[i].id === this.props.post.authorId) {
                                postAuthor = this.props.allUsersArr[i];
                }
            }
            authors = (
                <Link to={`/users/${postAuthor.id}`}>
                    <span className="post_author">{postAuthor.first_name + " " + postAuthor.last_name}</span>
                </Link>
            )
        }
    
        // HTML
        return (
            <>
                <div className="one_post">
                    <div className="one_post_left_child">
                        <div>
                            <Link to={`/users/${postAuthor.id}`}>
                                <img className="post_author_profile" src={postAuthor.profilePhotoUrl}/>
                            </Link>
                            <div className="name_date_container">
                                {authors}
                                <span>
                                    {timeOfPost}
                                </span>
                            </div>
                        </div>
                        { postOptions }
                    </div>
                    <span className="post_content">{this.props.post.content}</span>
                    {/* url is a terrible name for SHOWING PHOTO of post if it exists */}
                    {url}
                    {/* number of comments */}
                    <div className="num_comments">
                        {commentsTag} 
                    </div>
                    {/* number of likes */}
                    <div className="num_likes">
                        {likesTag}
                    </div>

                    <div className="post_footer">
                        <div className="like_comment_container">
                            <li>
                                <button onClick={this.handleLike}>
                                <img src={likeIcon}/>                               
                                    {unlike}
                                </button>
                            </li>
                            <li>
                                <img src={window.comment}/>
                                <span>
                                    Comment
                                </span>
                            </li>
                        </div>
                    </div>
                    <CommentIndexItemContainer postId={this.props.post.id}/>
                    <CreateCommentContainer postId={this.props.post.id}/>
                </div>
            
            </>
        )
    }
}

const msp = (state, ownProps) => {

    return {
        post: ownProps.post,
        source: ownProps.source,
        likers: ownProps.likers,
        allLikes: ownProps.allLikes,
        
        currentUser: ownProps.currentUser,
        profileOwner: ownProps.profileOwner,
        
        allUsersArr: ownProps.allUsersArr,
        allUsersObj: ownProps.allUsersObj, 
        
        likerIds: ownProps.likerIds,
    }
}

const mdp = dispatch => {
    return {
        openModal: (str) => dispatch(openModal(str)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    };
};

export default withRouter(connect(msp, mdp)(PostIndexItem));