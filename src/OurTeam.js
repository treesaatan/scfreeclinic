import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Jumbotron} from './components/Jumbotron'
import EthanImg from './assets/ethan_p.png'
import ShayImg from './assets/shay_p.png'

export const OurTeam = () => (
    <React.Fragment>
    <Jumbotron jumboClasses="ourteam_jumbo" jumboText="OUR TEAM"/>
    <div>
        <h3>PR Team</h3>
        <h6>The PR team is working to foster a relationship with the community in Santa Cruz by providing opportunities to contribute to the clinic, as well as distributing resources to those experiencing houselessness.</h6>

        <h3>Legal Team</h3>
        <h6>The Legal Team is working to ensure the longevity of Santa Cruz Free Clinic by retaining its status as a 501c3 nonprofit organization. </h6>

        <h3>Finance Team</h3>
        <h6>The Finance Team is working to ensure that the clinic makes fiscal decisions to best support our community.</h6>
        
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
    </div>
    </React.Fragment>

)

export const BoardMembers = (props) => {
    const { memberImage1, memberImage2, memberName1, memberName2, memberDesc1, memberDesc2  } = props;
    return (
        <Container>
            {/* You can add breakpoints! */}
            <Row>
                <Col xs={12} md={6}><img width={150} src={memberImage1} alt="member1"/></Col>
                <Col xs={12} md={6}><img width={150} src={memberImage2} alt="member2"/></Col>
            </Row>
            <Row>
                <Col xs={12} md={6}><h6>{memberName1}</h6></Col>
                <Col xs={12} md={6}><h6>{memberName2}</h6></Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>{memberDesc1}</Col>
                <Col xs={12} md={6}>{memberDesc2}</Col>
            </Row>
        </Container>
    )
}

// export const BoardMembers = (props) => {
//     const { memberImage, memberName, memberDesc } = props;
//     return (
//         <React.Fragment>
//             <Media>
//                 <img
//                 width={64}
//                 height={64}
//                 className="align-self-start"
//                 src="holder.js/64x64"
//                 alt="Generic placeholder"
//                 />
//                 <Media.Body>
//                 <h5>{memberName}</h5>
//                 <p>{memberDesc}</p>
//                 </Media.Body>
//             </Media>

//             <Media>
//                 <img
//                 width={64}
//                 height={64}
//                 className="align-self-center"
//                 src="holder.js/64x64"
//                 alt="Generic placeholder"
//                 />
//                 <Media.Body>
//                 <h5>{memberName}</h5>
//                 <p>{memberDesc}</p>
//                 </Media.Body>
//             </Media>
//         </React.Fragment>
//     )
// }
