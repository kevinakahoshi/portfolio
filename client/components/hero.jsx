import React from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

function Hero() {
  return (
    <div className="main-hero d-flex">
      <Container className="m-auto" fluid>
        <Row>
          <Col xs="2" />
          <Col xs="4" className="d-flex">
            <div className="my-auto">
              <h1 className="">Kevin Akahoshi</h1>
              <h3 className="text-muted">Full Stack Developer</h3>
              <Button outline color="secondary">
                Learn More
              </Button>
            </div>
          </Col>
          <Col xs="6" className="mr-0 pr-0">
            <div className="hero-graphic"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
