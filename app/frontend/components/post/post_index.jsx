import React from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allLikesArr: this.props.allLikesArr,
        }
    }

    componentWillUpdate(nextProps) {
        if (this.state.allLikesArr.length !== nextProps.allLikesArr.length) {
            this.setState({ allLikesArr: nextProps.allLikesArr });
        }
    }
    // TODO: WillMount()
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchPosts();
        this.props.fetchAllLikes();
    }

    render() {

        if(this.props.allUsersArr.length === 1) {
            return null;
        }

        const users = this.props.allUsersObj;
        
        const posts = this.props.postsToShowArr.slice(0).reverse().map((post) => {
            
            let likers = [];
            
            if(post.likerIds.length !== 0) {
                for(let i = 0; i < post.likerIds.length; i++) {
                    likers.push(users[post.likerIds[i]]);
                }
            }

            return ( <PostIndexItem
                key={post.id} 
                likerIds = {post.likerIds}
                post={post}
                source = {this.props.source}
                likers = {likers}
                allLikes = {this.state.allLikesArr}
                
                currentUser = {this.props.currentUser}
                profileOwner = {this.props.profileOwner}

                allUsersArr ={this.props.allUsersArr}
                allUsersObj = {this.props.allUsersObj}
                />
            )
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