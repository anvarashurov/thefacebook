import React from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount() {
        return this.props.fetchPosts();
    }
    render() {

        // // debugger 

        // // let myId = parseInt(this.props.postOwner.id);
        // let myId = parseInt(this.props.profileOwner.id);
        // let myPosts = [];
        // let allPosts = this.props.posts;

        // // TODO: Bruuh seriously? the fuck is the point of authoredPostIds???? Dumbass

        // for(let i = 0; i < allPosts.length; i++) {
        //     if ((allPosts[i].authorId === myId && allPosts[i].receiverId === myId) || (allPosts[i].receiverId === myId && allPosts[i].authorId !== myId)) {
        //         myPosts.push(allPosts[i]);
        //     }
        // }

        const posts = this.props.myPosts.slice(0).reverse().map((post) => {
            return <PostIndexItem 
                post={post} 
                key={post.id} 
                users ={this.props.users}
                // postOwner={this.props.postOwner}
                currentUser = {this.props.currentUser}
                profileOwner = {this.props.profileOwner}
                
                deletePost = {this.props.deletePost}
                openModal = {this.props.openModal}
                closeModal = {this.props.closeModal}
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