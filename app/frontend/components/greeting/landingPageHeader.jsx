import React from 'react';
import LoginFormContainer from '../login/LoginFormContainer';
const LandingPageHeader = () => {
  return (
    <header className="welcome-page-header">
      <span className="thefacebook">
        thefacebook
      </span>
      <LoginFormContainer />
    </header>
  )
}

export default LandingPageHeader;