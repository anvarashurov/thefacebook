import React from 'react';

const Workplace = ({ profileOwner }) => {
    // debugger
    return (
        <ul>
            <li>Works at
                <span>{profileOwner.workplace}</span> 
            </li>
        </ul >
    )
}

export default Workplace;