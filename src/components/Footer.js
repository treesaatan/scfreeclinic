import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faTwitter,
    faInstagramSquare,
  } from '@fortawesome/free-brands-svg-icons'

const Styles = styled.div`
    .navbar {
        background-color: #E0DEDC;
        padding: 4rem;
        margin: 7rem 0 0 0;
    }

    .navbar p {
        margin: 0;
        width: 100%;
        margin: 0 auto;
    }

    #footer-content {
        text-align: center;
    }

    a {
        color: #212529;
    }
`;

class Footer extends Component {

    render() {
      return (
        <Styles>
            <Navbar expand="lg" variant="dark">
                <Container id="footer-content">
                    <p>Location: -- | Phone Number: -- | Email: <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com </a></p>
                    <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                    <FontAwesomeIcon icon={["fab", "instagram-square"]} />
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                </Container>
            </Navbar>
        </Styles>
      );
    }
  }
  
export default Footer;