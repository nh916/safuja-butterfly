//mdBootstrap component not using yet
import React from 'react';
import {
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';

class NonFixedNavbarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const container = {height: 1300}
        return (
            <div>
                <Router>
                    <header>
                        <MDBNavbar color="default-color" dark expand="md">
                            <MDBNavbarBrand href="/">
                                <strong>Navbar</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.onClick}/>
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/about">about</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Pricing</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#">Opinions</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="facebook-f"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="twitter"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="instagram"/></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
                <MDBContainer style={container} className="text-center mt-5">
                    <h2>This Navbar isn't fixed</h2>
                    <h5>When you scroll down it will disappear</h5>
                </MDBContainer>
            </div>
        );
    }
}

export default NonFixedNavbarExample;