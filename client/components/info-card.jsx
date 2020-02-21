import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';

function InfoCard(props) {
  return (
    <Col lg="3"
      md="4"
      sm="6"
      className="p-sm-3 mobile-six-card">
      <Card className={`h-100 skills-card slide-in-10 ${props.classes}`}>
        <CardBody>
          <img alt="JavaScript Icon"
            src={props.logo}
            className="icon-svg d-block m-auto" />
          <div className="my-3">
            <h4 className="text-center h5">{props.name}</h4>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default InfoCard;
