import React from 'react';

const Workplace = ({ profileOwner }) => {
    // 
    return (
        <ul>
            <li>Works at
                <span>{profileOwner.workplace}</span> 
            </li>
        </ul >
    )
}

export default Workplace;