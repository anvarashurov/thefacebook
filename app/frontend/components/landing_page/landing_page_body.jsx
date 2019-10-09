import React from 'react';

import LandingPageDetails from './landing_page_details';
import SignupFormContainer from './signup/signup_form_container';

const LandingPageBody = () => {
    return (
        <div className="landing_page_body">
            <div className="body_upper_part">
                {/* details part in the left part of the landing page*/}
                <LandingPageDetails />
                {/* the sign up form in the landing page body */}
                <div className="body_top_right_child">
                    <SignupFormContainer />
                </div>
            </div>
            {/* the tiny message under sign up form in the landinage page's body */}
            <div className="create_page_message">
                <p>
                    <a href="#">Create a Page</a>  for a celebrity, band or business.
                </p>
            </div>
        </div>
    )
}

export default LandingPageBody;