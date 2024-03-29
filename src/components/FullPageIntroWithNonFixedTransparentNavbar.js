//mdBootstrap landing page that navigation links are not working for.
// the url changes when clicking on the navigation links but the view does not load and the page does not change
import React from 'react';
import {
    MDBCollapse,
    MDBContainer,
    MDBMask,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
    MDBView
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
                            <MDBNavbarBrand href="/">
                                <strong>Navbar</strong>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick}/>}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/samples">Samples</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/about">About Us</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/contact">Contact Us</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>

                    <MDBView
                        src="https://images.unsplash.com/photo-1513897962041-55f6de928dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                        <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                            <h2>This Navbar is fixed</h2>
                            <h5>It will always stay visible on the top, even when you scroll down</h5>
                            <p>Navbar's background will switch from transparent to solid color while scrolling down</p>
                            <br/>
                            <p>Full page intro with background image will be always displayed in full screen mode,
                                regardless of device </p>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.</p>
                    </MDBContainer>
                </main>
            </div>
        );
    }
}

export default FullPageIntroWithFixedTransparentNavbar;