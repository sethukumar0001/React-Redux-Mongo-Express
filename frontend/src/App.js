/*
 * Purpose : This is Main Page for Routing
 * Devlopers : Narendra,Rachana,supriya, swathi
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import {Provider} from 'react-redux';
import store from './Redux/store/store';



//App component 
function App() {

  return (
    <div className="">
      <Provider store ={store}>
              <Router>
        <Switch>
          <Route exact path="/" component={Register}></Route>
        </Switch>
      </Router>
      </Provider>

    </div>
  );
}

export default App;
