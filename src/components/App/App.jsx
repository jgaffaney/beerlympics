import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../Home/HomePage';
import Scores from '../Scores/Scores';
import TournamentBracket from '../TournamentBracket/TournamentBracket';
import RulesEvents from '../RulesEvents/RulesEvents';
import TeamHome from '../Teams/TeamHome';
import FreeAgent from '../FreeAgent/FreeAgent';


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route
            exact
            path="/about"
            component={AboutPage}>
          </Route>

          <ProtectedRoute
            exact
            path="/user"
            component={UserPage}>
          </ProtectedRoute>

          <Route
            exact
            path="/first"
            component={HomePage}>
          </Route>

          <Route
            exact
            path='/tournament'
            component={TournamentBracket}>
          </Route>
          <Route
            exact
            path='/rules'
            component={RulesEvents}>
          </Route>

          <Route
            exact
            path='/freeagents'
            component={FreeAgent}>
          </Route>

          <Route
            exact
            path='/teams'
            component={TeamHome}>
          </Route>

          <Route
            exact
            path="/login">
            {user.id ?
              <Redirect to="/user" />
              :
              <LoginPage />}
          </Route>

          <Route
            exact
            path="/scores">
              <Scores />
          </Route>
          <Route
            exact
            path="/registration">
            {user.id ?
              <Redirect to="/user" />
              :
              <RegisterPage />}
          </Route>

          <Route
            exact
            path="/home">
            {/* {user.id ?
              <Redirect to="/user" />
              : */}
              <LandingPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
