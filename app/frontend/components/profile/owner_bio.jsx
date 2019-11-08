import React from 'react';
import {Link} from 'react-router-dom';

const OwnerBio = ({ profileOwner, currentUser }) => {

    let bio, currCity, workplace, school, hometown, relStatus;

    currCity = profileOwner.current_city
    bio = profileOwner.bio;
    workplace = profileOwner.workplace;
    school = profileOwner.school;
    hometown = profileOwner.hometown;
    relStatus = profileOwner.rel_status;

    currCity 

    // let bioEle;
    
    // if(bio.length === 0) {
    //     bioEle = (
    //         <span className="add_bio_message">
    //             Add a short bio to tell people more
    //             about yourself.
    //         </span>
    //     ) 
    // } else {
    //     bioEle = (
    //         <span className="add_bio_message">
    //             {profileOwner.bio}
    //         </span>
    //     ) 
    // }

    return (
        <div className="intro_container">
            <div className="world_icon_and_text">
                <img src={window.globeIcon} alt="W"/>
                <span className="intro">Intro</span>
            </div>
            <div className="thought_icon_and_text">
                <img src={window.commentIcon} alt="C"/>
                <span className="add_bio_message">
                    Update Profile to add more info about yourself.
                </span>
                <Link to={`/users/${profileOwner.id}/about/edit`}>Add Bio</Link>
            </div>
            <div className="add_bio_upper_border"></div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={window.workplace} />
                        </td>
                        <td> Works at
                            <span>
                                {workplace}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={window.school}/>
                        </td>
                        <td> Studied at
                            <span>
                                {school}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={window.currCity} />
                        </td>
                        <td>
                            Lives in 
                            <span>
                                {currCity}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={window.hometown} />
                        </td>
                        <td> From
                            <span>
                                {hometown}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={window.relStatus}/>
                        </td>
                        <td>
                            <span>
                                {relStatus}
                            </span>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    )
}

export default OwnerBio;