import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
//why
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

// Thus App will be rendered for all routes in your app.We'll define our routes within App.

// Provider allows store to be accessed by other child components
// How about HashRouter?

//

export default Root;