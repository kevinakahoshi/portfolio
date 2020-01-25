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
              <h3 className="text-center heading mb-4 spread slide-in">Technical Skills</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="JavaScript Icon"
                  src="./assets/icons/javascript.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">JavaScript</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="React.js Icon"
                  src="./assets/icons/react.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">React.js</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="jQuery Icon"
                  src="./assets/icons/jquery.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">jQuery</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="PHP Icon"
                  src="./assets/icons/php.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">PHP</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="MySQL Icon"
                  src="./assets/icons/mysql.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">MySQL</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="HTML5 Icon"
                  src="./assets/icons/html5.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">HTML5</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="CSS3 Icon"
                  src="./assets/icons/css3.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center h5">CSS3</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 skills-card slide-in-10">
              <CardBody>
                <img alt="Bootstrap Icon"
                  src="./assets/icons/bootstrap.svg"
                  className="icon-svg d-block m-auto" />
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
