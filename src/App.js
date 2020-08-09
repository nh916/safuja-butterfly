import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Button from 'react-bootstrap/Button';
import HomeScreen from "./components/HomeScreen";



function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" exact component={Home}/>

            </Switch>
        </BrowserRouter>

    );
}

export default App;
