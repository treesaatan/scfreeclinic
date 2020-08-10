import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
    .nav {
        background-color: #E0DEDC;
        padding: 4rem;
        margin: 7rem 0 0 0;
    }

    .nav p {
        margin: .2rem;
    }

    #footer-content {
        text-align: center;
    }

    a {
        color: #212529;
    }
`;

export const Footer = () => (
        <Styles>
            <Nav className="justify-content-center" expand="lg" variant="dark">
                <Container id="footer-content">
                    <p>Location: -- | Email: <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com </a></p>
                    <Button variant="link" href="https://www.facebook.com/groups/215765172962897/" target="_blank"><FontAwesomeIcon icon={["fab", "facebook-f"]} /></Button>
                    <Button variant="link" href="https://www.instagram.com/scfreeclinic/" target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]} /></Button>
                    <Button variant="link" href="https://twitter.com/scfreeclinic" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} /></Button>
                </Container>
            </Nav>
        </Styles>
)
