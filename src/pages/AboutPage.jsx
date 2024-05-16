import { useState } from "react";
import { Container } from "react-bootstrap";

import AccordionList from "../components/features/accordion/AccordionList";
import transition from "../transition";
import "../css/about.css"

function AboutPage() {
  return (
    <Container>
      <h1 className="te">about me</h1>
      <p className="te">
        my name is pratham and im super passionate about web development,
        specifically front-end.
      </p>
      <h1 className="te">education</h1>
      <p className="te">
       i have a cert 3 & cert 4 in IT, and im currently studying a diploma of information technology.
      </p>
    </Container>
  );
}

export default transition(AboutPage);
