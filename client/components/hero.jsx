import React from 'react';
import {
  Container,
  Row,
  Col,
  Fade
} from 'reactstrap';

function Hero() {
  return (
    <div className="main-hero d-flex bg-white">
      <Container className="m-auto" fluid>
        <Row>
          <Col md="6" className="d-flex order-2 order-sm-1">
            <div className="m-auto">
              <Fade tag="h1"
                className="spread">Kevin Akahoshi</Fade>
              <Fade tag="h2"
                className="text-muted h3">Full Stack Developer</Fade>
            </div>
          </Col>
          <Col md="6" className="p-0 order-1 order-sm-2">
            <Fade tag="img" src="./images/apps.png" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
