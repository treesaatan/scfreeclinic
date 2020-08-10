import React from 'react';
import {Jumbotron} from './components/Jumbotron'
export const About = () => (
    <React.Fragment>
    <Jumbotron jumboClasses="about_jumbo" jumboText="ABOUT THE CLINIC"/>
    <div id="mission">
        <h5>Santa Cruz Free Clinic is dedicated to fighting healthcare disparities 
            in the Santa Cruz community by providing access to first step healthcare. 
            We strive to provide compassionate and accessible healthcare and resources 
            to those who may be experiencing houselessness or other difficult conditions 
            at this time. 
        </h5>
        <h6>It is the goal of the SCFC to provide access to basic healthcare and hygiene resources to the community.</h6>
    </div>
    </React.Fragment>

)
