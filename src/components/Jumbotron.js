import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import campus from '../assets/campus.jpg';

const Styles = styled.div`
    .jumbo {
        padding: 6rem;
        margin: 0rem 0rem 2rem 0rem;
        background: url(${campus}) fixed bottom;
        background-size: cover;
        color: #efefef;
        text-shadow: 1px 1px 5px black;
        text-align: center;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container> 
                <h1>SANTA CRUZ FREE CLINIC</h1>
            </Container>
        </Jumbo>
    </Styles>
)