import React from 'react';
import {NavLink} from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            <nav>
                <ul>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                    <br/>
                    <NavLink exact activeClassName="selected" to="/Price">Price</NavLink>
                </ul>
            </nav>
        </>
    );
}

export default NavigationBar;
