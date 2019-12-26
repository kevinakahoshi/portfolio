import React from 'react';
import {
  Container,
  Row,
  Col,
  Fade,
  Button
} from 'reactstrap';

function Hero() {
  return (
    <div className="main-hero d-flex bg-white">
      <Container className="m-auto" fluid>
        <Row>
          <Col md="6" className="d-flex order-2 order-sm-1">
            <div className="m-auto">
              <Fade tag="h1">Kevin Akahoshi</Fade>
              <Fade tag="h3" className="text-muted">Full Stack Developer</Fade>
              <Button outline color="secondary" className="aka-button fade show">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md="6" className="p-0 order-1 order-sm-2">
            {/* <div className="hero-graphic"/> */}
            <img src="./images/apps.png" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
