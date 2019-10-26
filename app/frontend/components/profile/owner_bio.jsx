import React from 'react';
import {Link} from 'react-router-dom';

const OwnerBio = ({ profileOwner }) => {
    return (
        <div className="intro_container">
            <div className="world_icon_and_text">
                <img src={window.globeIcon} alt="W"/>
                <span className="intro">Intro</span>
            </div>
            <div className="thought_icon_and_text">
                <img src={window.commentIcon} alt="C"/>
                <span className="add_bio_message">
                    Add a short bio to tell people more 
                    about yourself.
                </span>
                {/* <button>Add Bio</button> */}
                <Link to={`/users/${profileOwner.id}/about/edit`}>Add Bio</Link>
                {/* <a id="add_bio" src="#">Add Bio</a> */}
            </div>
            {/* <ul>
                <li> Lives in </li>
                <li> From </li>
            </ul>
            <a href="#">Edit Details</a>
            <img src="#" alt="S"/>
            <span>Showcase what's important to you by adding photos, pages, groups and more to your featured section on your public profile.</span>
            <a href="#">Add to Featured</a> */}
        </div>
    )
}

export default OwnerBio;