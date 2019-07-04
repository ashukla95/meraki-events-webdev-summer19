import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Search from "./modules/search_components/Search"
import {BrowserRouter as Router, Route} from "react-router-dom";

const routing = (
    <Router>
        <Route exact path={"/meraki/"} component={Home} />
        <Route path={"/meraki/search-properties/"} component={Search}/>
        <Route path={"/meraki/sign-in/"} component={Home}/>
        <Route path={"/meraki/sign-up/"} component={Home}/>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

