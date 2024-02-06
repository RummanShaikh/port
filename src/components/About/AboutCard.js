import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rumman Shaikh </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently a Third year Student pursuing Bachelor's of Technology from MIT Academy of Engineering Alandi, Pune.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be a rainbow in someone else cloud"{" "}
          </p>
          <footer className="blockquote-footer">Rumman Shaikh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
