import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function Hero() {
  return (
    <div className="main-hero d-flex bg-white">
      <Container
        className="m-auto"
        fluid>
        <Row>
          <Col md="6"
            className="d-flex order-2 order-sm-1">
            <div className="m-auto">
              <h1 className="spread fade-in slide-in-10">Kevin Akahoshi</h1>
              <h2 className="text-muted h3 fade-in slide-in-10">Full Stack Developer</h2>
            </div>
          </Col>
          <Col md="6"
            className="p-0 order-1 order-sm-2">
            <img
              src="/images/apps-resize.png"
              className="img-fluid fade-in slide-in-10"
              alt="Mocks of the different apps made on mobile phones." />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
