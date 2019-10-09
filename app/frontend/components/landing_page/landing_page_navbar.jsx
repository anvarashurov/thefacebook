import React from 'react';
import LoginFormContainer from './login/login_form_container';

const LandingPageNavbar = () => {
  return (
    <nav className="welcome_page_header">
      <div className="welcome_page_menu_bar">
        <span className="thefacebook">
          <a href="#">
           thefacebook
           </a>
        </span>
        <LoginFormContainer />
      </div>
    </nav>
  )
}

export default LandingPageNavbar;