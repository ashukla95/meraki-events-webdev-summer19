import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Search from "./Search"
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropertyDetails from './PropertyDetails';

const routing = (
  <Router>
    <Route exact path={"/"} component={Home} />
    <Route exact path={"/home"} component={Home} />
    <Route path={"/search/"} component={Search} />
    <Route path={"/sign-in/"} component={Home} />
    <Route path={"/sign-up/"} component={Home} />
    <Route path={"/book-now/"} component={Home} />
    <Route path={"/property/:placeId/"} component={PropertyDetails} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

