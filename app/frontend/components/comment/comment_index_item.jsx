import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateCommentContainer from '../comment/create_comment_container';
import { createLike, deleteLike } from '../../actions/like_actions';
import {connect} from 'react-redux';

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);

        this.formatHour = this.formatHour.bind(this);
        // this.handleReply = this.handleReply.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    formatHour(date) {
        let time;
        let d = Date.now();
        let sec = Math.floor((d - date) / 1000);
        if(sec < 60) {
            time = `${sec}s`;
        } else if(sec < (60*60)) {
            time = `${Math.floor(sec/60)}m`;
        } else if(sec < (60*60*24)) {
            time = `${Math.floor(sec/(60*60))}h`;
        }        
        else {
            time = `${Math.floor(sec/(60*60*24))}d`
        }
        return time
    }

    handleLike() {
        // debugger
        // if user has liked then deleteLike
        if (this.props.comment.likerIds.includes(this.props.currentUser.id)) {
            // debugger
            for (let i = 0; i < this.props.allLikes.length; i++) {
                if (this.props.allLikes[i].likerId === this.props.currentUser.id
                    && this.props.allLikes[i].likeableId === this.props.comment.id) {
                    // debugger
                    this.props.deleteLike(this.props.allLikes[i].id);
                }
            }
        }
        // if user has NOT liked, then createLike
        else {
            // debugger
            // let tempLikers = this.state.commentLikers;
            return this.props.createLike({ likeable_id: this.props.comment.id, likeable_type: 'Comment' });
            // tempLikers.push(currentUser);
            // this.setState({commentLikers: tempLikers});
            // return this.setState({comment: this.props.comment});
        }
    }

    // handleReply() {
    //     if(replyContainer === null) {
    //         setReplyContainer(
    //             <div className="reply_form">
    //                 <CreateCommentContainer /> 
    //             </div>
    //         )
    //     } else {
    //         setReplyContainer(null);
    //     }
    // }

    render() {

        // debugger
        let commentCreatedAt = new Date(this.props.comment.createdAt);
        commentCreatedAt = this.formatHour(commentCreatedAt);
        // const [replyContainer, setReplyContainer] = useState(null);
        
        // let likeIcon;
        // if (this.props.comment.likerIds.includes(this.props.currentUser.id)) {
        //     likeIcon = window.likeblue;
        // } else {
        //     likeIcon = window.like
        // }

        const numLikes = this.props.comment.likeIds.length;
        let likesTag;
        let unlike = "Like"
        if (numLikes === 1) {
            // debugger
            if (this.props.comment.likerIds[0] === this.props.currentUser.id) {
                unlike = "Unlike";
                likesTag = (
                    <div className="comment_like_count_container">
                        <img src={window.likecount} />
                        <span className="comment_like_count_text">
                            1
                        </span>
                    </div>
                )
            } else {
                likesTag = (
                    <div className="comment_like_count_container">
                        <img src={window.likecount} />
                        <span className="comment_like_count_text">
                            1
                        </span>
                    </div>
                )
            }
            // numLikes + " " + "Like";
        } else if (numLikes > 1) {
            if (this.props.comment.likerIds.includes(this.props.currentUser.id)) {
                unlike = "Unlike";
                likesTag = (
                    <div className="comment_like_count_container">
                        <img src={window.likecount} />
                        <span className="comment_like_count_text">
                            {numLikes}
                        </span>
                    </div>
                )
            } else {
                likesTag = (
                    <div className="comment_like_count_container">
                        <img src={window.likecount} />
                        <span className="comment_like_count_text">
                            {numLikes}
                        </span>
                    </div>
                )
            }
        }


        
        return (
            <div className="one_comment">
                <div className="comment_body">
                    <img src={this.props.commentOwner.profilePhotoUrl} style={{width: '32px', height: '32px'}}/>
                    <div className="content_and_footer_container"> 


                        <div className="author_and_comment_content">
                            <Link to={`/users/${this.props.commentOwner.id}`}>
                                <div className="comment_author">
                                    {this.props.commentOwner.first_name + " " + this.props.commentOwner.last_name}
                                </div>
                            </Link>
                            <span className="comment_content">
                                {this.props.comment.content}
                            </span>
                        </div>









                        <div className="comment_footer_container">
                            <div className="comment_footer">
                                <button onClick = {this.handleLike}>
                                    {/* <img src={likeIcon} /> */}
                                    {unlike}
                                </button>
                                {/* <button>
                                    Reply
                                </button> */}
                                <span>
                                    {commentCreatedAt}
                                </span>
                                {/* <div className="comment_num_likes">
                                    
                                </div> */}
                            </div>
                            <div>
                                {likesTag}
                            </div>
                        </div>
                        {/* <div>
                            {replyContainer}
                        </div> */}
                    </div>
                </div>
            </div>   
        )
    }
};

const msp = (state, ownProps) => ({
    commentLikes: ownProps.commentLikes,
    allLikes: ownProps.allLikes,
    comment: ownProps.comment,
    commentOwner: ownProps.commentOwner,
    currentUser: state.entities.users[state.session.currentUserId],
})

const mdp = dispatch => ({
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    // deleteComment
})

export default connect(msp, mdp)(CommentIndexItem);