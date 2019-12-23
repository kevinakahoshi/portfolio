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
          <Col md="2" />
          <Col md="4" className="d-flex order-2 order-sm-1">
            <div className="my-auto py-5">
              <h1 className="">Kevin Akahoshi</h1>
              <h3 className="text-muted">Full Stack Developer</h3>
              <Button outline color="secondary">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md="6" className="p-0 order-1 order-sm-2">
            <div className="hero-graphic"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
