import React from 'react';
import LoginFormContainer from '../login/LoginFormContainer';
import SignupFormContainer from '../signup/SignupFormContainer';
const LandingPageHeader = () => {
  return (
    <header className="welcome-page-header">
      <span className="thefacebook">
        thefacebook
      </span>
      <LoginFormContainer />
      <SignupFormContainer />
    </header>
  )
}

export default LandingPageHeader;