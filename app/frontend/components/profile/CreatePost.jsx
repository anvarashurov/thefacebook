import React from 'react';

const CreatePost = ({ currentUser }) => {
    return (
        <div className="create_post_container">
            <ul>
                <li>
                    <img src="#" alt="PEN"/>
                    <span>Create Post</span> 
                </li>
                <li>
                    <img src="#" alt="Ph"/>
                    <span>Photo/Video</span> 
                </li>
                <li>
                    <img src="#" alt="V"/>
                    <span>Live Video</span> 
                </li>
                <li>
                    <img src="#" alt="F"/>
                    <span>Life Event</span> 
                </li>
            </ul>
            <div className="create_post_area">
                <img src="#" alt="P"/>
                <input type="text" placeholder="What's on your mind?"/>
            </div>
            <ul>
                <li>
                    <img src="#" alt="Ph"/>
                    <span>Photo/Video</span> 
                </li>
                <li>
                    <img src="#" alt="P"/>
                    <span>Tag Friends</span> 
                </li>
                <li>
                    <img src="#" alt="E"/>
                    <span>Feeling/Activ...</span> 
                </li>
                <li>
                    <span>
                        ...
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default CreatePost;