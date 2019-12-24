import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

function Skills() {
  return (

    <div className="skills-section topographic" id="skills">
      <Container>
        <Row>
          <Col xs="12">
            <h3 className="text-center">Technical Skills</h3>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-javascript_badge large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">JavaScript</h4>
                  <small className="text-center d-block">(ES5 + ES6)</small>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicon-react-plain large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">React.js</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-jquery large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">jQuery</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-php large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">PHP</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-mysql large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">MySQL</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-html5 large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">HTML5</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-css3 large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">CSS3</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3" sm="6" xs="12" className="p-3">
            <Card className="h-100 pointer">
              <CardBody>
                <i className="devicons devicons-bootstrap large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Bootstrap 4</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
