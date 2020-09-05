import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/scfc_logo.png";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #5c1008;
    padding-top: 0;
  }

  .navbar .scfc-logo {
    padding-top: 1rem;
    padding-bottom: 0;
    color: white;
    font-size: 1.5rem !important;
  }

  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: white;
    }
  }

  // When a dropdown is clicked, remain white
  .navbar-light .navbar-nav .show > .nav-link,
  .dropdown-item.active {
    color: white;
    background: transparent;
  }

  .dropdown-menu {
    background-color: #5c1008;
  }

  .dropdown-item,
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    &:hover {
      color: white;
      background: transparent;
    }
  }
  .dropdown_nav {
    padding: 12px 32px;
  }

  @media screen and (max-width: 978px) {
    #link {
      padding: 8px 0 !important;
    }
  }

  #link {
    padding: 8px;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        {/* only show brand when on desktop+ */}
        <Navbar.Brand href="/" className="scfc-logo">
          <img src={logo} height="55" alt="SCFC" />
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        {/* only show brand when on mobile */}
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} id="link" to="/our_services">
              Our Services
            </Nav.Link>
            <NavDropdown title="About the Clinic" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/core_values">
                  Core Values
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/about">
                  Mission + Goal
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/our_team">
                  Our Team
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Become Involved" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.gofundme.com/f/santa-cruz-free-clinic-gofundme-fund?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all"
                target="_blank"
                className="dropdown_nav"
              >
                GoFundMe
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://forms.gle/vp6ATFmfQVDgJRuA6"
                target="_blank"
                className="dropdown_nav"
              >
                Volunteer Interest Form
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link as={Link} to="/intern_application">
                  Intern Application
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);
