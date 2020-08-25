import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Jumbotron} from './components/Jumbotron'
import EthanImg from './assets/BoardMembers/ethan_p.png'
import ShayImg from './assets/BoardMembers/shay_p.png'
import KeertanaImg from './assets/BoardMembers/keertana_l.png'
import RamtinImg from './assets/BoardMembers/ramtin_l.png'
import KausthubImg from './assets/BoardMembers/kausthub_f.png'
import KyleImg from './assets/BoardMembers/kyle_f.png'

export const OurTeam = () => (
    <React.Fragment>
    <Jumbotron jumboClasses="ourteam_jumbo" jumboText="OUR TEAM"/>
    <div>

        <h3>Legal Team</h3>
        <h6>The Legal Team is working to ensure the longevity of Santa Cruz Free Clinic by retaining its status as a 501(c)(3) nonprofit organization. </h6>
        <BoardMembers 
            memberImage1={RamtinImg}
            memberName1="Ramtin Poustinchi - Executive Director / Legal Director" 
            memberDesc1="Ramtin Poustinchi is the founder and executive director of the Santa Cruz Free Clinic. His journey in nonprofit 
            work began with his employment at Housing Matters as a freshman, whilst he was pursuing a B.S. in Neuroscience with a minor 
            in Bioinformatics. During his tenure at housing matters he set out to identify gaps in care for the unsheltered community, 
            and profiled a plan to address those gaps. Over a period of 3 years that plan evolved and grew into the Santa Cruz Free Clinic, 
            with the help of a small group of UCSC students dedicated to community service. Ramtin hopes to grow the clinic into a reputable 
            force for positive change in the community, with the goal of addressing gaps in care for those in need."
            memberImage2={KeertanaImg}
            memberName2="Keertana Katuru - Legal Director" 
            memberDesc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <h3>Public Relations Team</h3>
        <h6>The PR team is working to foster a relationship with the community in Santa Cruz by providing opportunities to contribute to the clinic, as well as distributing resources to those experiencing houselessness.</h6>
        <BoardMembers 
            memberImage1={EthanImg}
            memberName1="Ethan Lin - Director of Personal Relations" 
            memberDesc1="Ethan Lin is a third year MCD Biology student with a passion for giving back to his community. Throughout high school, 
            he has gone on several service trips to Taiwan to serve the indigenous population there. At UCSC, he interned for Cal Teach to make 
            an impact on K-12 students in local Santa Cruz schools. As the PR co-director, Ethan hopes to be able to give back to the homeless 
            and less fortunate in the local Santa Cruz community through Santa Cruz Free Clinic. Like the other members of the clinic, Ethan 
            wants the clinic to become a service that is able to fulfill the basic healthcare and hygiene needs of the community. In the future, 
            he desires to continue to give back through his love for biology and health sciences by becoming a Physician Assistant (PA)."
            memberImage2={ShayImg}
            memberName2="Shay Reed - Director of Personal Relations" 
            memberDesc2="Shay Reed is a third year Human Biology student at UCSC. While she is originally from Utah, she has fallen in love
            with Santa Cruz and its community over the years that she has lived there. She joined SCFC in an effort to reach out to those that 
            she saw struggling in the Santa Cruz community and to work to fill those needs that were not being met for people experiencing 
            houselessness. As a PR Co-Director, Shay hopes to build a relationship with the community that SCFC serves and to bring in volunteers 
            and other resources to help take care of those in need. In the future, Shay hopes to use her experience in biology and service to become 
            an emergency physician and to continue to serve her community with knowledge and compassion. "
        />

        <h3>Finance Team</h3>
        <h6>The Finance Team is working to ensure that the clinic makes fiscal decisions to best support our community.</h6>
        <BoardMembers 
            memberImage1={KausthubImg}
            memberName1="Kausthub Prodduturi - Director of Finance" 
            memberDesc1="Kausthub is a third year student studying Neuroscience at UCSC. He was interested in becoming a part of 
            SCFC because he wanted to help people in the community that are under served. After raising money and awareness for 
            various non profit organizations, he has realized that even the smallest help or change can lead to a major difference in 
            the lives of those who need it. As one of the directors of finance, it is his duty to make sure that the clinic is financially 
            stable and able to use its assets to support the community. It is his goal to make sure that SCFC, through donors and sponsors, 
            always has the funds necessary to help anyone in their time of need. After graduation, he hopes to attend medical school in order 
            to become a fully practicing physician so that he can continue to serve our society."
            memberImage2={KyleImg}
            memberName2="Kyle Lee - Director of Finance" 
            memberDesc2="Kyle is a board member of the Santa Cruz Free Clinic. At UCSC, he studied Technology and Information Management and 
            after graduating, he joined the Santa Cruz Free Clinic’s financial team. During his time in Santa Cruz, he learned about the importance 
            of a strong and close-knit community, and began to work in nonprofits across the county. Due to his experiences, he knew that his actions 
            could make a great positive difference in the lives of the people of my community. As part of the financial team, he aims to combine his 
            course studies and nonprofit experience to improve the clinic’s backend and allow clinic operations to run smoother than an eight cylinder 
            firing on ten pistons."
        />

        <hr/>

        <h5>A THANK YOU TO OUR INTERNS</h5>
        <ul>
            <li>Theresa Tan - Website Lead [Summer 2020] / Social Media [Summer 2020]</li>
            <li>Jo Leslie - Social Media Lead [Summer 2020] / Website [Summer 2020]</li>
            <li>Haley Block - Hygiene Kit Lead [Summer 2020] / Social Media [Summer 2020]</li>
        </ul>
        <ul>
            <li>Sophie Tamayo - Legal Intern [Summer 2020]</li>
            <li>Yatziri Arias Torres - Legal Intern [Summer 2020]</li>
        </ul>
        <ul>
            <li>Brian Flores - Finance Intern [Summer 2020]</li>
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