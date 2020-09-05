import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./styles/Jumbotron.css";

export const Jumbotron = (props) => {
  const { jumboClasses, jumboText } = props;
  // console.log("tesssa: " + JSON.stringify(props))
  return (
    <Jumbo fluid className={"full_width , base_jumbo " + jumboClasses}>
      {/* <div className="jumbo_overlay"></div> */}
      <Container>
        <h1 className="jumbotext">{jumboText}</h1>
      </Container>
    </Jumbo>
  );
};
