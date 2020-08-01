import React from 'react';
import {BrowserRouter, Route, withRouter, Redirect} from "react-router-dom";
import Home from "./pages/Home";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import About from "./pages/About";
import { Link } from 'react-router-dom';


function App() {

    return (
        <BrowserRouter>

            <switch>

                <Link path="/" exact component={Home}/>
                <Link path="/about" exact component={About}/>
                {/*<Route path="/samples" exact component={Home}/>*/}
                {/*<Route path="/contact" exact component={Home}/>*/}






                {/*<Route path='*' exact={true} component={NotFound} />*/}
            </switch>


        </BrowserRouter>

    );
}

export default App;
