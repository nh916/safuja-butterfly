import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Button from 'react-bootstrap/Button';
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import HomeScreen from "./components/HomeScreen";
import About from "./components/About";


ReactDOM.render(
    <React.StrictMode>

        <App />


    </React.StrictMode>,


    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
