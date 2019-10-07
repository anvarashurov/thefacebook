import React from 'react';

const Intro = ({ currentUser }) => {
    return (
        <div className="intro_container">
            <div>
                <img src="#" alt="W"/>
                Intro
            </div>
            <div>
                <img src="#" alt="C"/>
                <span>
                    Add a short bio to tell people more 
                    about yourself.
                </span>
                {/* <button>Add Bio</button> */}
                <a href="#">Add Bio</a>
            </div>
            <ul>
                {/* These are auto generated */}
                <li> Lives in </li>
                <li> From </li>
            </ul>
            <a href="#">Edit Details</a>
            <img src="#" alt="S"/>
            <span>Showcase what's important to you by adding photos, pages, groups and more to your featured section on your public profile.</span>
            <a href="#">Add to Featured</a>
        </div>
    )
}

export default Intro;