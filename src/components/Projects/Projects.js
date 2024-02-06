import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="GYM Management System"
              description="This website manages the GYM users with related to their diets and shows the timetable and their expiring date of gym subscription. Admin can also manage the users by using CRUD operations i.e. adding, deleting users etc."
              techStack="Spring MVC, HTML, CSS, Javascript, MySQL"
              ghLink="https://github.com/RummanShaikh/GYM_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Extension Helper"
              description="This website helps in finding the useful extension to coders and more likely to opensource type of website where the developer can share their developed extensions and free study materials from across the web is available and also helps in making a coder community"
              techStack="SpringBoot, React"
              ghLink="https://github.com/RummanShaikh"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
