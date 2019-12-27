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

    <div className="skills-section topographic content-div position-relative" id="skills">
      <Container>
        <Row className="mobile-six-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading mb-4">Technical Skills</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-javascript_badge large-font text-center d-block position-relative">
                  <div className="background-test position-absolute"></div>
                </i>
                <div className="my-3">
                  <h4 className="text-center h5">JavaScript</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-react large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">React.js</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-jquery large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">jQuery</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicon-php-plain colored large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">PHP</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicon-mysql-plain colored large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">MySQL</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-html5 large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">HTML5</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-css3 large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">CSS3</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 pointer skills-card">
              <CardBody>
                <i className="devicons devicons-bootstrap large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center h5">Bootstrap</h4>
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
