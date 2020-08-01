import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import MetaAndImports from "./components/MetaAndImports";
import NavigationBar from "./components/NavigationBar";

function App() {

    return (
        <BrowserRouter>

            <NavigationBar/>

            <switch>
                <Route path="/meta" exact component={MetaAndImports}/>
                <Route path="/" exact component={Home}/>
            </switch>


        </BrowserRouter>

    );
}

export default App;
