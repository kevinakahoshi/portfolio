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
        <Row className="mobile-six-row">
          <Col xs="12">
            <div className="heading-div position-relative m-auto">
              <h3 className="text-center heading mb-4 text-white spread slide-in">Tools</h3>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/github.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Github</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/aws.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">AWS</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/npm.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">npm</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/webpack.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Webpack</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/babel.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Babel</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/apache.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Apache</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/chrome-dev-tools.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Chrome Dev Tools</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/jira.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">JIRA</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/vs-code.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">VS Code</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/figma.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Figma</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/photoshop.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Photoshop</h4>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6" className="p-sm-3 mobile-six-card">
            <Card className="h-100 shadow-none slide-in-10 bg-transparent text-white">
              <CardBody>
                <img src="./assets/icons/slack.svg"
                  className="icon-svg d-block m-auto" />
                <div className="my-3">
                  <h4 className="text-center">Slack</h4>
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
