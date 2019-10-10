import React from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount() {
        return this.props.fetchPosts();
    }

    render() {

        const posts = this.props.posts.map((post) => {
            return <PostIndexItem post={post} deletePost={this.props.deletePost} key={post.id} />
        })

        return (
            <div>
                <ul>{posts}</ul>
            </div>
        );
    }
}

export default PostIndex;