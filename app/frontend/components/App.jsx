import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, Switch} from '../util/route_util';
import LandingPageContainer from './landing_page/landing_page_container';
import ProfileContainer from '../components/profile/profile_container';
import ModalContainer from '../components/modal/modal_container';
import PendingFriendContainer from '../components/profile/friend/pending_friend_container';

const App = () => (
  <div>
    <ModalContainer/>
    <Route path="/" component={LandingPageContainer} />
    <ProtectedRoute path="/users/:id" component={ProfileContainer}/>
  </div>
);

export default App;