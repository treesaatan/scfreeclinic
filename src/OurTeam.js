import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Jumbotron} from './components/Jumbotron'
import EthanImg from './assets/BoardMembers/ethan_p.png'
import ShayImg from './assets/BoardMembers/shay_p.png'
import KeertanaImg from './assets/BoardMembers/keertana_l.png'
import RamtinImg from './assets/BoardMembers/ramtin_l.png'
import KaushtubImg from './assets/BoardMembers/kaushtub_f.png'
import KyleImg from './assets/BoardMembers/kyle_f.png'

export const OurTeam = () => (
    <React.Fragment>
    <Jumbotron jumboClasses="ourteam_jumbo" jumboText="OUR TEAM"/>
    <div>
        <h3>Public Relations Team</h3>
        <h6>The PR team is working to foster a relationship with the community in Santa Cruz by providing opportunities to contribute to the clinic, as well as distributing resources to those experiencing houselessness.</h6>
        <BoardMembers 
            memberImage1={EthanImg}
            memberName1="Ethan Lin" 
            memberDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            memberImage2={ShayImg}
            memberName2="Shay Reed" 
            memberDesc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <h3>Legal Team</h3>
        <h6>The Legal Team is working to ensure the longevity of Santa Cruz Free Clinic by retaining its status as a 501c3 nonprofit organization. </h6>
        <BoardMembers 
            memberImage1={KeertanaImg}
            memberName1="Keertana" 
            memberDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            memberImage2={RamtinImg}
            memberName2="Ramtin" 
            memberDesc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <h3>Finance Team</h3>
        <h6>The Finance Team is working to ensure that the clinic makes fiscal decisions to best support our community.</h6>
        <BoardMembers 
            memberImage1={KaushtubImg}
            memberName1="Kaushtub" 
            memberDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            memberImage2={KyleImg}
            memberName2="Kyle" 
            memberDesc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <hr/>

        <h5>A THANK YOU TO OUR INTERNS</h5>
        <ul>
            <li>Theresa Tan - Website Lead [Summer 2020] / Social Media [Summer 2020]</li>
            <li>Jo Leslie - Social Media Lead [Summer 2020] / Website [Summer 2020]</li>
            <li>Haley Block - Hygiene Kit Lead [Summer 2020] / Social Media [Summer 2020]</li>
        </ul>
        <ul>
            <li>Sophie Tamayo</li>
            <li>Yatziri Arias Torres</li>
        </ul>
        <ul>
            <li>Brian Flores</li>
        </ul>
    </div>
    </React.Fragment>

)

export const BoardMembers = (props) => {
    const { memberImage1, memberImage2, memberName1, memberName2, memberDesc1, memberDesc2  } = props;
    return (
        <Container>
            {/* You can add breakpoints! */}

            <Row className="boardMember">
                <Col xs={12} md={3}><img width={150} src={memberImage1} alt="member1"/></Col>
                <Col xs={12} md={9}><h6>{memberName1}</h6> {memberDesc1} </Col>
            </Row>
            <Row className="boardMember">
                <Col xs={12} md={3}><img width={150} src={memberImage2} alt="member2"/></Col>
                <Col xs={12} md={9}><h6>{memberName2}</h6> {memberDesc2}</Col>
            </Row>

        </Container>
    )
}
