import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';

function Contact() {
  return (
    <div className="content-div footer bg-white" id="contact">
      <Container>
        <h3 className="text-center">Kevin Akahoshi</h3>
        <div className="my-5">
          <Row className="justify-content-center">
            <p className="text-center mb-md-0 mx-4">
              <i className="fas fa-map-marker-alt mr-2" />Orange County
            </p>
            <p className="text-center mb-md-0 mx-4">
              <a href="tel:+19492027141"
                className="pointer decoration-none p-0">
                <i className="fas fa-phone-square-alt mr-2" />949-202-7141
              </a>
            </p>
            <p className="text-center mb-md-0 mx-4">
              <a href="mailto:kevin.akahoshi@gmail.com"
                className="pointer decoration-none p-0">
                <i className="fas fa-envelope mr-2" />kevin.akahoshi@gmail.com
              </a>
            </p>
          </Row>
          <Row className="justify-content-center">
            <div className="mt-5">
              <i className="fab fa-github mx-4 medium-font" />
              <i className="fab fa-linkedin mx-4 medium-font" />
              <i className="far fa-file mx-4 medium-font" />
            </div>
          </Row>
        </div>
        <h6 className="mb-0 text-center">© Kevin Akahoshi 2019</h6>
      </Container>
    </div>
  );
}

export default Contact;
