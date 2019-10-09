import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class About extends React.Component {

    // debugger;
    
    render() {
        // debugger
        return(
            <div className="about_container">
                <div className="about_title_container">
                    <img src={window.profile} alt="Profile"/>
                    <p>About</p>
                </div>
                <div className="about_body_container">
                    <div className="about_menu">
                        <Link to="/overview">Overview</Link>
                        <Link to="/work">Work and Education</Link>
                        <Link to="/lived">Places You've Lived</Link>
                        {/* When user clicks one of the above, 
                            the appropriate section on the right side 
                            need to be updated
                        */}
                    </div>
                    <div className="menu_content">
                        <ul>
                            <li>
                                Add a workplace
                            </li>
                            <li>
                                Add a school
                            </li>
                            <li>
                                These will come from DB.
                                I won't implement Button's / Forms.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;