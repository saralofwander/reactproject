import React from "react";
//css
import '../css/index.css';
//bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>A visual branding studio focused on product photography.</p>
      <Container>
        <Row>
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
    </div>
  )
};




export default About;