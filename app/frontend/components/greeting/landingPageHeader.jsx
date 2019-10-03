import React from 'react';
import LoginFormContainer from '../login/LoginFormContainer';
const LandingPageHeader = () => {
  return (
    <nav className="welcome_page_header">
      <div className="welcome_page_menu_bar">
        <span className="thefacebook">
          thefacebook
        </span>
        <LoginFormContainer />
      </div>
    </nav>
  )
}

export default LandingPageHeader;