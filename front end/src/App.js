import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/Login/Login';
import CreateAcc from './pages/CreateAcc/CreateAcc';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import RSVP from './pages/RSVP/RSVP';
import Cuserprofile from './pages/Cuserprofile/Cuserprofile';
import Confirmation from './pages/Confirmation/Confirmation';
import EventInfo from './pages/EventInfo/EventInfo';
import VenueProfile from './pages/VenueProfile/VenueProfile';

import './App.css';

function App() {
  return (
    <div className="root">
      <div className="content"
      span className="font-link">
        <Router>
          <Switch>
            <Route exact={true} path={'/'}>
              <Login />
            </Route>
            <Route exact={true} path={'/home'}>
              <Home />
            </Route>
            <Route exact={true} path={'/createAcc'}>
              <CreateAcc />
            </Route>
            <Route exact={true} path={'/users'}>
              <Users />
            </Route>
            <Route exact={true} path={'/RSVP'}>
              <RSVP />
            </Route>
            <Route exact={true} path={'/Cuserprofile'}>
              <Cuserprofile />
            </Route>
            <Route exact={true} path={'/Confirmation'}>
              <Confirmation />
            </Route>
            <Route exact={true} path={'/EventInfo'}>
              <EventInfo />
            </Route>
            <Route exact={true} path={'/VenueProfile'}>
              <VenueProfile />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
