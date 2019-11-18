import React from 'react';

const Overview = ({profileOwner}) => {
    return (
        <ul>
            <li>Works at
                <span>
                    {profileOwner.workplace}
                </span>
            </li>
            <li>Studied at
                <span>
                    {profileOwner.school}
                </span>
            </li>
            {/* <li>HIGH SCHOOL</li> */}
            <li>Lives in
                <span>
                    {profileOwner.current_city}
                </span>
            </li>
            <li> Birthday
                <span>
                    {profileOwner.birthday}
                </span>
            </li>
        </ul>
    )
}

export default Overview;