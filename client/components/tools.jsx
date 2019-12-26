import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

function Tools() {
  return (

    <div className="tools-section nihon-background content-div topographic-2" id="tools">
      <Container>
        <Row>
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading pb-2 text-white">Tools</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-github large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Git/Github</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-aws large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">AWS</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-npm large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">npm</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-photoshop large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Photoshop</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="fab fa-figma large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Figma</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-jira large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">JIRA</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicons-chrome large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Chrome Dev Tools</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="p-3">
            <Card className="h-100 shadow-none pointer bg-transparent text-white">
              <CardBody>
                <i className="devicons devicon-babel-plain large-font text-center d-block" />
                <div className="my-3">
                  <h4 className="text-center">Babel</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tools;
