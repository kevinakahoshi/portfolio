import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Carousel from './carousel';

function Applications() {
  return (
    <div className="applications-section bg-white" id="applications">
      <Container>
        <Row>
          <Col xs="12">
            <h3 className="text-center heading mb-4">Applications</h3>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Applications;
