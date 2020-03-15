import React from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter
} from 'reactstrap';

function Grid(props) {
  return (
    <Row
      className="row-cols-1 row-cols-md-2 row-cols-lg-3">
      {getProjects(props.projects)}
    </Row>
  );
}

export default Grid;

function getProjects(projectsArray) {
  return projectsArray.map((project, index) => {
    return (
      <Col key={index}
        className="mb-4">
        <Card className="h-100 rounded border slide-in-10">
          <CardBody
            className="p-3">
            <a href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer decoration-none position-relative">
              <img src={project.image}
                className="img-fluid border rounded mb-3"
                alt={project.alt} />
            </a>
            <h5 className="text-center mb-3">
              {project.name}
            </h5>
            <p className="mb-3">
              {truncateDescription(project.description, project.name)}
            </p>
            <h6 className="mb-3">Developed Using</h6>
            <div className="d-flex align-content-start flex-wrap w-100">
              {getTechnologies(project.technologies)}
            </div>
          </CardBody>
          <CardFooter className="bg-white p-3">
            <a className="btn btn-share default-nav decoration-none fade-in slide-in mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href={project.github}>
              <i className="fab fa-github mr-2" />GitHub</a>
            <a className="btn btn-share default-nav decoration-none fade-in slide-in"
              target="_blank"
              rel="noopener noreferrer"
              href={project.live}>
              <i className="far fa-window-restore mr-2" />Live</a>
          </CardFooter>
        </Card>
      </Col>
    );
  });
}

function truncateDescription(description, name) {
  if (name !== 'Spontaneous.ly') {
    const firstPeriod = description.indexOf('.');
    return description.slice(0, firstPeriod + 1);
  } else {
    return description.split('.', 2).join('.');
  }
}

function getTechnologies(project) {
  return project.map((technology, index) => {
    return <span key={index}
      className="badge custom-badge text-white my-1 ml-0 mr-2">{technology}</span>;
  });
}
