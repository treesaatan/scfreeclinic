import React from 'react';
import {Jumbotron} from './components/Jumbotron'

export const OurTeam = () => (
    <React.Fragment>
    <Jumbotron jumboClasses="ourteam_jumbo" jumboText="OUR TEAM"/>
    <div>
        <h3>PR Team</h3>
        <h6>The PR team is working towards building a relationship with the community and bringing people into the clinic. We are also working to bring resources to those who are experiencing houselessness. </h6>
        <p>The PR team is working to foster a relationship with the community in Santa Cruz by providing opportunities to contribute to the clinic, as well as distributing resources to those experiencing houselessness.</p>

        <h3>Legal Team</h3>
        <h6>The Legal Team is working to make sure that our clinic retains its state and nationally recognized nonprofit status. This team is also working hard to create a plan that ensures the longevity of the clinic. </h6>
        <p>The Legal Team is working to ensure the longevity of Santa Cruz Free Clinic by retaining its status as a 501c3 nonprofit organization. </p>

        <h3>Finance Team</h3>
        <h6>The Finance Team is working to ensure that our team is able to successfully receive donations from our community and that our organization can continue to provide resources for fighting healthcare disparities. </h6>
        <p>The Finance Team is working to ensure that the clinic makes fiscal decisions to best support our community.</p>
    </div>
    </React.Fragment>

)