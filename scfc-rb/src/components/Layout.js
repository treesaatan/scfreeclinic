import React from 'react';
import { Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'; <-- imports entire library

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)