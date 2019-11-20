import React from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchPosts();
    }
    render() {

        debugger
        
        if(this.props.users.length < 2) {
            debugger
            return null;
        }

        if(this.props.postsToShow.length === 0) {
            return null;
        }

        const posts = this.props.postsToShow.slice(0).reverse().map((post) => {
            return <PostIndexItem 
                post={post} 
                key={post.id} 
                users ={this.props.users}
    
                currentUser = {this.props.currentUser}
                profileOwner = {this.props.profileOwner}
                
                deletePost = {this.props.deletePost}
                openModal = {this.props.openModal}
                closeModal = {this.props.closeModal}
                source = {this.props.source}
                />
        })

        return (
            <div>
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

export default PostIndex;