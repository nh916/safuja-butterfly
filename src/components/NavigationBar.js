import React from 'react';
import {NavLink} from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
                <NavLink className="navbar-brand" to="#" /><strong>Navbar</strong>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Link</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;
