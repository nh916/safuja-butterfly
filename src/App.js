import React from 'react';
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import Home from "./components/Home";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NotFound from "./components/NotFound";


function App() {

    return (
        <BrowserRouter>

            <switch>

                <Route path="/" exact component={Home}/>
                {/*<Route path="/about" exact component={}/>*/}
                {/*<Route path="/samples" exact component={Home}/>*/}
                {/*<Route path="/contact" exact component={Home}/>*/}






                {/*<Route path='*' exact={true} component={NotFound} />*/}
            </switch>


        </BrowserRouter>

    );
}

export default App;
