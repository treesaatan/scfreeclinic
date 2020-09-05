import React from "react";
import { Jumbotron } from "./components/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CoreValues = () => (
  <React.Fragment>
    <Jumbotron jumboClasses="corevalues_jumbo" jumboText="CORE VALUES" />
    <div className="bodywidth">
      <h4>Accessibility</h4>
      <p>
        We are committed to making your experience working with us as accessible
        as possible. Please let us know if you need assistance or
        accommodations. Contact{" "}
        <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com</a> for
        accommodations.
      </p>
      <h4>Diversity</h4>
      <p>
        We value the differences that make us unique. We share a responsibility
        to create a positive culture based on respect to safeguard equity,
        inclusion, and dignity for our team and the communities we work with.
      </p>
      <h4>Equality</h4>
      <p>
        We pledge to provide equal treatment to those in need of our assistance
        regardless of age, sexual orientation, ethnic identity, gender identity,
        race or religion. Volunteers and patients at Santa Cruz Free Clinic must
        treat each other respectfully. We do not condone
        descrimination/harassment of any kind. See our Zero Tolerance Policy
        below for more information.
      </p>
      <h4>Integrity in our actions</h4>
      <p>
        We remain accountable to our community, donors, volunteers, and members
        and ensure full transparency in utilizing our resources solely for the
        purpose of the organization.
      </p>
      <h4>Respect for the communities we work with and serve</h4>
      <p>
        We are committed to treating every individual with dignity and respect.
        We strive to prepare the organization and our members to ensure we act
        responsibly towards the communities we work with.
      </p>
      <h4>Responsive to the needs of the community</h4>
      <p>
        We understand that the needs of Santa Cruz’s marginalized communities
        are diverse and complex. We are committed to being attentive and
        responsive to those needs to the best of our ability.
      </p>
      <h4>Responsible Stewardship</h4>
      <p>
        We recognize the responsibility of running a healthcare non profit
        organization and our impact in the community. We are committed to
        ensuring that our actions are guided by our core values and in the
        interest of the community.
      </p>

      <h4>Zero Tolerance Policy for Harassment and Discriminatory Behavior</h4>
      <ul>
        <li>
          Harassment is defined as any unwanted physical or verbal conduct that
          offends or humiliates the recipient, that interferes with their
          ability to work and learn or leads to adverse job-related
          consequences, and that any reasonable person ought to have known would
          be unwelcome. It does not include the legitimate exercise of
          supervisory authority regarding performance reviews, work evaluations,
          or valid disciplinary measures. It may include direct or implied
          threats of firing, loss of promotion or loss of pay raise, or may
          create an intimidating, hostile, or offensive work setting.
        </li>
        <li>
          Examples of harassment include, but are not limited to, racial or
          sexual slurs, name calling, racist or sexist jokes, negative
          stereotyping, physical assault, bullying, threats, demeaning pictures,
          posters and graffiti.
        </li>
      </ul>
      <h5>
        Harassment includes the following categories of behavior, whether the
        behavior occurs once or many times:
      </h5>
      <Harassment
        category="Discriminatory Behavior"
        description="Discrimination refers to treating people differently, 
      negatively, or adversely because of one or more of the following prohibited grounds 
      of discrimination: race, color, ancestry, place of origin, political belief, religion, age, sex, 
      sexual orientation, marital status, family status, physical or mental disability, or pardoned criminal conviction."
      />
      <Harassment
        category="Personal Harassment"
        description="Personal harassment includes objectionable conduct, comment, or 
      display made on either a one-time or continuous basis that demeans, belittles, 
      or causes personal humiliation or embarrassment on the part of the recipient. It 
      may or may not be linked to discriminatory behavior."
      />
      <Harassment
        category="Sexual Harassment"
        description="Sexual harassment refers to any conduct, comment, gesture, or contact of 
      a sexual nature, whether on a one-time basis or a series of incidents, that might reasonably 
      be expected to cause offence or humiliation or that might reasonably be perceived as placing 
      a condition of a sexual nature on employment, an opportunity for training or promotion, 
      receipt of services, or a contract. Examples of behavior that can constitute sexual harassment include, but
      are not limited to: unwanted touching, patting or leering Policy on Harassment, page 1 of 2, sexual assault,
      inquiries or comments about a person’s sex life, telephone calls with sexual overtones, gender-based insults or jokes
      causing embarrassment or humiliation or repeated unwanted social or sexual invitations, and inappropriate or 
      unwelcome focus/comments on a person’s physical attributes or appearance."
      />
      <Harassment
        category="Bullying"
        description="Bullying consists of behavior to attack and diminish another by subjecting 
        the recipient to unjustified criticism and trivial fault-finding, humiliating the recipient 
        (especially in front of others), and/or ignoring, overruling, isolating and excluding the recipient. 
        If from a superior, bullying may include setting up the recipient for failure by setting unrealistic 
        goals or deadlines, or denying necessary information and resources; either overloading the recipient 
        with work or taking all work away (sometimes replacing proper work with demeaning jobs); or increasing 
        responsibility while removing authority."
      />
      <Harassment
        category="Abuse of Authority"
        description="Abuse of authority refers to an individual improperly using the power and authority 
        inherent in a position to endanger a person’s job, undermine the performance of that job, threaten 
        the person’s economic livelihood, or in any way interfere with or influence a person’s career. It is 
        the exercise of authority in a manner that serves no legitimate work purpose and ought reasonably to 
        be known to be inappropriate. Examples of abuse of authority include, but are not limited to, such acts 
        or misuse of power as intimidation, threats, blackmail, or coercion."
      />
      <Harassment
        category="Poisoned Work Environment"
        description="A poisoned work environment is characterized by an activity or behavior, not necessarily 
        directed at anyone in particular, that creates a hostile or offensive workplace. Examples of a poisoned 
        work environment include but are not limited to: graffiti, sexual, racial or religious insults or jokes, 
        abusive treatment of an employee, and the display of pornographic or other offensive material."
      />

      <h4>
        Those who are reported to have harassed a coworker will not be allowed
        to volunteer with the Santa Cruz Free Clinic. To report harassment
        and/or discrimination please contact:
        <a href="mailto:scfreeclinic@gmail.com"> scfreeclinic@gmail.com</a>
      </h4>
    </div>
  </React.Fragment>
);

export const Harassment = (props) => {
  const { category, description } = props;
  return (
    <Container>
      <Row className="boardMember">
        <Col xs={12} md={3}>
          <h6>{category}</h6>
        </Col>
        <Col xs={12} md={9}>
          <p className="p_grid">{description}</p>
        </Col>
      </Row>
    </Container>
  );
};
