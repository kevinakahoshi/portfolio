import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function Contact() {
  return (
    <div className="content-div footer bg-white d-flex" id="contact">
      <Container className="m-auto">
        <Row>
          <Col sm="4" className="d-none d-sm-block">
            <div className="h-100 d-flex">
              <hr className="m-auto w-100" />
            </div>
          </Col>
          <Col sm="4">
            <h3 className="text-center m-auto">Kevin Akahoshi</h3>
          </Col>
          <Col sm="4" className="d-none d-sm-block">
            <div className="h-100 d-flex">
              <hr className="m-auto w-100" />
            </div>
          </Col>
        </Row>
        <div className="my-5">
          <Row className="justify-content-center">
            <p className="text-center mb-md-0 mx-4 smooth-transition default-nav">
              <i className="fas fa-map-marker-alt mr-2" />Orange County
            </p>
            <p className="text-center mb-md-0 mx-4">
              <a href="tel:+19492027141"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-phone-alt mr-2" />949-202-7141
              </a>
            </p>
            <p className="text-center mb-0 mx-4">
              <a href="mailto:kevin.akahoshi@gmail.com"
                className="pointer pb-2 default-nav p-0">
                <i className="fas fa-envelope mr-2" />kevin.akahoshi@gmail.com
              </a>
            </p>
          </Row>
          <Row className="justify-content-center">
            <div className="mt-5 d-flex">
              <a href="https://github.com/kevinakahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-github pointer m-auto">
                <div className="border-div d-flex">
                  <i className="fab fa-github medium-font m-auto" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kevin-akahoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-linkedin pointer m-auto">
                <div className="border-div d-flex mx-4 ">
                  <i className="fab fa-linkedin medium-font m-auto" />
                </div>
              </a>
              <a href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-none default-color contact-general pointer m-auto">
                <div className="border-div d-flex">
                  <i className="far fa-file medium-font m-auto" />
                </div>
              </a>
            </div>
          </Row>
        </div>
        <h6 className="mb-0 text-center">&#169; Kevin Akahoshi 2019</h6>
      </Container>
    </div>
  );
}

export default Contact;
