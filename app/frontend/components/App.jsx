// import GreetingContainer from "./greeting/greeting_container";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from "./greeting/LoginFormContainer";
import SignupFormContainer from "./greeting/SignupFormContainer";

// Greeating container???

const App = () => (
  <div>
    <header>
      <h1>Log In Form</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

// list of containers

export default App;