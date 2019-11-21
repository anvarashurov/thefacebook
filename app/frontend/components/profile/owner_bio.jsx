import React from 'react';
import {Link} from 'react-router-dom';

const OwnerBio = ({ profileOwner, currentUser, openModal }) => {

    let bio, currCity, workplace, school, hometown, relStatus;

    bio = profileOwner.bio;
    currCity = profileOwner.current_city
    workplace = profileOwner.workplace;
    school = profileOwner.school;
    hometown = profileOwner.hometown;
    relStatus = profileOwner.rel_status;

    let workTag, cityTag, homeTag, schoolTag, relTag;

    if(workplace.length === 0) {
        workTag = (
            <td className="default_text">
                Workplace
            </td>
        )
    } else {
        workTag = (
            <td> Works at
                <span>
                    {workplace}
                </span>
            </td>
        )
    }
    if (currCity.length === 0) {
        cityTag = (
            <td className="default_text">
                City
            </td>
        )
    } else {
        cityTag = (
            <td> Lives in
                <span>
                    {currCity}
                </span>
            </td>
        )
    }
    if (school.length === 0) {
        schoolTag = (
            <td className="default_text">
                School
            </td>
        )
    } else {
        schoolTag = (
            <td> Studied at
                <span>
                    {school}
                </span>
            </td>
        )
    }
    if(hometown.length === 0) {
        homeTag = (
            <td className="default_text">
                Hometown
            </td>
        )
    } else {
        homeTag = (
            <td> From
                <span>
                    {hometown}
                </span>
            </td>
        )
    }
    if (relStatus.length === 0) {
        relTag = (
            <td className="default_text">
                Relationship Status
            </td>
        )
    } else {
        relTag = (
            <td>
                <span>
                    {relStatus}
                </span>
            </td>
        )
    }

    let introButton, introText;

    if(bio.length === 0) {
        if(currentUser.id === profileOwner.id) {
            introButton = "Add Bio";
            introText = (
                <span className="add_bio_message">
                    Update Profile to add more info about yourself.
                </span>
                )
        } else {
            introText = ( 
                <span className="add_bio_message">
                    They have not updated their bio yet.
                </span>
            )
        }
    } else {
        if(currentUser.id === profileOwner.id) {
            introButton = "Edit Bio"
        }
        introText = ( 
            <span id="bio_message">
                { profileOwner.bio }
            </span>
        )
    }

    return (
        <div className="intro_container">
            <div className="world_icon_and_text">
                <img src={window.globeIcon} alt="W"/>
                <span className="intro">Intro</span>
            </div>
            <div className="thought_icon_and_text">
                <img src={window.commentIcon} alt="C"/>
                {introText}
                <button id="intro_button" onClick={() => openModal({type: "edit_profile"})}>{introButton}</button>
            </div>
            <div className="add_bio_upper_border"></div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={window.workplace} />
                        </td>
                        {workTag}
                    </tr>
                    <tr>
                        <td>
                            <img src={window.school}/>
                        </td>
                        {schoolTag}
                    </tr>
                    <tr>
                        <td>
                            <img src={window.currCity} />
                        </td>
                        {cityTag}
                    </tr>
                    <tr>
                        <td>
                            <img src={window.hometown} />
                        </td>
                        {homeTag}
                    </tr>
                    <tr>
                        <td>
                            <img src={window.relStatus}/>
                        </td>
                        {relTag}
                    </tr>                    
                </tbody>
            </table>
        </div>
    )
}

export default OwnerBio;