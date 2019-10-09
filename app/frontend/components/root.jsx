import React from 'react';

import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    {/* this means router methods available inside child components */}
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
)

// Thus App will be rendered for all routes in your app.We'll define our routes within App.

// Provider allows store to be accessed by other child components
// How about HashRouter?

export default Root;