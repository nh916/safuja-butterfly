import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import FullPageIntroWithNonFixedTransparentNavbar from "./components/FullPageIntroWithNonFixedTransparentNavbar";
import BasicExample from "./components/BasicExample";

function App() {

    return (
        <BrowserRouter>

            <NavigationBar />

            <switch>
                <Route path="/" exact component={Home}/>
            </switch>


        </BrowserRouter>

    );
}

export default App;
