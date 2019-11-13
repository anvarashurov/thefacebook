import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, Switch} from '../util/route_util';
import LandingPageContainer from './landing_page/landing_page_container';
import ProfileContainer from '../components/profile/profile_container';
import ModalContainer from '../components/modal/modal_container';
import FriendContainer from '../components/profile/friend/friend_container';

const App = () => (
  <div>
    <ModalContainer/>
    {/* <Route path={`/users/:id/friendships`} component={FriendContainer} /> */}
    {/* <Switch>
      <FriendContainer/>
      <LandingPageContainer/>
    </Switch> */}
    {/* <Route path={`/users/:id/friendships`} >
      <Navbar />
      <FriendContainer />
   </Route> */}
    {/* / ==> NavBar and LandingPage */}
    {/* /users/id/friendships ==> NavBar and FriendContainer */}
    <Route path="/" component={LandingPageContainer} />
    <ProtectedRoute path="/users/:id" component={ProfileContainer}/>
  </div>
);

export default App;