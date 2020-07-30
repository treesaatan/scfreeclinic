import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #5C1008;
        padding-top: 0;
    }

    .navbar .scfc-logo {
        padding-top: 1rem;
        padding-bottom: 0;
        color: white;
    }

    .navbar-nav .nav-link {
        color: rgba(255,255,255,.6);
        &:hover {
            color: white;
        }
    }

    // When a dropdown is clicked, remain white
    .navbar-light .navbar-nav .show>.nav-link {
        color: white;
    }

    .dropdown-menu {
        background-color: #5C1008;
    }

    .dropdown-item {
        color: rgba(255,255,255,.6);
        &:hover {
            color: white;
            background: transparent;
        }
    }

    // .dropdown-toggle::after {
    // }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/scfreeclinic/#/" className="scfc-logo"><img src="https://gallery.mailchimp.com/dc310f781af3dfc101fd4c57c/images/1e63e991-c626-430b-aa5c-0113be67a089.jpg" height="35"/> SC Free Clinic</Navbar.Brand>
            </Container>
        </Navbar>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"> 
                        <Nav.Item><Nav.Link href="/scfreeclinic/#/ourservices">Our Services</Nav.Link></Nav.Item>
                        <NavDropdown title="About the Clinic" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/scfreeclinic/#/about">Mission + Goal</NavDropdown.Item>
                            <NavDropdown.Item href="/scfreeclinic/#/ourteam">Our Team</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Become Involved" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">GoFundMe</NavDropdown.Item>
                            <NavDropdown.Item href="#">Other</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)
