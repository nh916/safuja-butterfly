import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import FullPageIntroWithNonFixedTransparentNavbar from "./components/FullPageIntroWithNonFixedTransparentNavbar";
import BasicExample from "./components/BasicExample";



import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


function App() {

    return (
        <BrowserRouter>
            <FullPageIntroWithNonFixedTransparentNavbar />

            <switch>
                <Route path="/" exact component={Home}/>
            </switch>


        </BrowserRouter>

    );
}

export default App;
