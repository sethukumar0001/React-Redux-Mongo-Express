/*
 * Purpose : This is Main Page for Routing
 * Devlopers : Narendra,Rachana,supriya, swathi
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/home";
import {Provider} from 'react-redux';
import store from './Redux/store/store';
import jwt_decode from "jwt-decode";
import setAuthToken from './Redux/utils/setAuthToken';
import {setCurrentUser,logoutUser} from './Redux/Actions/actionCreators';
import Landing from './components/Layout/landing';
import Dashboard from './components/Dashboard/dashboard';
import PrivateRoute from './components/Private_Route/PrivateRoute';
// import Header from '../src/components/Header/Header'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}



//App component 
function App() {

  return (
    <div className="">
      <Provider store ={store}>
              <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/home" component ={Home}></Route>
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Switch>
      </Router>
      </Provider>

    </div>
  );
}

export default App;
