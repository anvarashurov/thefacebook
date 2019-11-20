import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        return this.props.fetchComments();
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
            return <CommentIndexItem 
                key={idx} 
                comment={comment} 
                commentOwner={commentAuthor} />
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