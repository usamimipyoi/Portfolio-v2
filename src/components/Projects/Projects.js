import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import colmar from "../../Assets/Projects/project-colmar.png";
import findHat from "../../Assets/Projects/project-findhat.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findHat}
              isBlog={false}
              title="Find you hat"
              description="Capstone project for Codeacademy, prove that learner can make javascript file that can run on terminal. This one didn't have demo. If you want to try please clone project from github"
              ghLink="https://github.com/usamimipyoi/find--your--hat"
              /* demoLink="https://colmar-31-jsd5.vercel.app/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colmar}
              isBlog={false}
              title="Colmar Academy"
              description="Capstone project for Codeacademy, prove that learner can make static website with html and CSS"
              ghLink="https://github.com/usamimipyoi/colmar--exam--UwU"
              demoLink="https://colmar-31-jsd5.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
