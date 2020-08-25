import React from 'react';
import {Jumbotron} from './components/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Styles = styled.div`
    Nav.Link {
        color: white;
    }

    .btn {
        margin: 1rem 2rem;
        background-color: #dabc66;
        border-color: #dabc66;
    }

    .nav-pills .nav-link.active {
        background-color: transparent;
        color: black;
    }

    .nav-pills .nav-link {
        color: #6c757c;
    }

    p {
        margin: 1rem 0;
    }

    div.col-sm-3 {
        margin: .5rem 0 1rem 0;
    }
`;

export const OurServices = () => (
    <Styles>
        <Jumbotron jumboClasses="ourservices_jumbo" jumboText="OUR SERVICES"/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="covidkits">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="covidkits">Covid Kits</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="haircuts" disabled>Hair Cuts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tb" disabled>TB Testing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="hivstd" disabled>HIV/STD Testing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="_____" disabled>_____</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="covidkits">
                                <p>Santa Cruz Free Clinic is working to provide assistance to 
                                    those members of our community who are experiencing houselessness 
                                    during this time. To do this we have created COVID-19 kits to distribute 
                                    that are filled with health and hygiene items like toothbrushes and 
                                    feminine care products among other items. We have also included personal 
                                    protective equipment or PPE like masks and hand sanitizer in our kits to 
                                    help protect the recipients from the spread of COVID-19. If you would like 
                                    to help aid our efforts in providing these kits to our community, our GoFundMe 
                                    can be found here:</p>
                                    <Button href="https://www.gofundme.com/f/santa-cruz-free-clinic-gofundme-fund?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all" target="_blank" rel="noopener noreferrer">GoFundMe</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="haircuts">
                                <p>Test</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
    </Styles>
)