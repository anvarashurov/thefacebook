import React from 'react';

const Lived = ({ profileOwner }) => {
    return (
        <ul>
            <li>Lives in
                <span>{profileOwner.current_city}</span>
            </li>
            <li>From 
                <span>{profileOwner.hometown}</span>
            </li>
        </ul>
    )
}

export default Lived;