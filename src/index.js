import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from "./Search"
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropertyDetails from './PropertyDetails';
import Profile from "./Profile";

const routing = (
  <Router>
    <Route exact path={"/"} component={Home} />
    <Route exact path={"/home"} component={Home} />
    <Route path={"/search/"} component={Search} />
    <Route path={"/sign-in/"} component={SignIn} />
    <Route path={"/sign-up/"} component={SignUp} />
    <Route path={"/book-now/"} component={Home} />
    <Route path={"/property/:placeId/"} component={PropertyDetails} />
    <Route path={"/profile"} component={Profile}/>
    <Route exact path={"/profile/:profileId"} component={Profile}/>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

