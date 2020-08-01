import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {
    return (
        <BrowserRouter>

            <div>
                <Switch>
                    <Route path="/about" exact component={About}> </Route>
                    <Route path="/" exact component={Home}/>

                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
