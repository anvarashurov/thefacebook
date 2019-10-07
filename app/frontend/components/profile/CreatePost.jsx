import React from 'react';

const CreatePost = ({ currentUser }) => {
    return (
        <div className="create_post_container">
            <ul className="top_part">
                <li>
                    <img src={window.createPostPen} alt="PEN"id="pen"/>
                    <span id="pen_text">Create Post</span> 
                </li>
                <li id="second">
                    <img src={window.camera} alt="Ph"/>
                    <span>Photo/Video</span> 
                </li>
                {/* <li>
                    <img src="#" alt="V"/>
                    <span>Live Video</span> 
                </li> */}
                {/* <li>
                    <img src="#" alt="F"/>
                    <span>Life Event</span> 
                </li> */}
            </ul>
            <form>
                <div className="create_post_area">
                    <img src={window.profile} alt="P"/>
                    <textarea placeholder="What's on your mind?"></textarea>
                </div>
                {/* <ul>
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
                </ul>*/}
                <input id="create_post_button" type="submit" value="Post"/>
            </form>
        </div>
    )
}

export default CreatePost;