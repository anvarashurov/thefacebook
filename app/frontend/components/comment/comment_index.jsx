import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allLikesArr: this.props.allLikesArr,
        }
    }
    
    componentDidMount() {
        return this.props.fetchComments();
    }

    componentWillUpdate(nextProps) {
        if (this.state.allLikesArr.length !== nextProps.allLikesArr.length) {
            this.setState({ allLikesArr: nextProps.allLikesArr });
        }
    }

    render() {

        let postComments = this.props.postComments;

        if(postComments.length === 0) {
            return null;
        }

        const comments = postComments.slice(0).map((comment, idx) => {
            let commentAuthor;
            for(let i = 0; i < this.props.postAuthors.length; i++) {
                if(comment.authorId === this.props.postAuthors[i].id) {
                    commentAuthor = this.props.postAuthors[i];
                }
            }


            let commentLikes = [];

            // if (comment.likerIds.length !== 0) {
            //     for (let i = 0; i < comment.likerIds.length; i++) {
            //         commentLikes.push(users[comment.likerIds[i]]);
            //     }
            // }


            return <CommentIndexItem 
                key={idx} 
                likerIds={comment.likerIds}
                // commentLikes = {commentLikes}
                comment={comment} 
                commentOwner={commentAuthor}
                allLikes = {this.state.allLikesArr}
                />
        })

        return (
            <div>
                <ul>
                    {comments}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;