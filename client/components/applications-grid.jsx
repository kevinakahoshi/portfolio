import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

function Grid(props) {
  return (
    <Row>
      <div className="card-group">
        {getProjects(props.projects)}
      </div>
    </Row>
  );
}

export default Grid;

function getProjects(projectsArray) {
  return projectsArray.map((project, index) => {
    return (
      <Col lg="4"
        md="6"
        sm="12"
        key={index}
        className="mb-3">
        <div
          className="card rounded border mb-3 h-100 slide-in-10">
          <div className="card-body">
            <a href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer decoration-none position-relative">
              <LazyLoad
                debounce={false}
                offsetVertical={350}>
                <img src={project.image}
                  className="img-fluid border rounded mb-3"
                  alt={project.alt} />
              </LazyLoad>
            </a>
            <h5 className="text-center mb-3">{project.name}</h5>
            <div className="mb-3">
              <p className="">{truncateDescription(project.description, index)}</p>
            </div>
            <h6 className="mb-3">Developed Using</h6>
            <div className="d-flex align-content-start flex-wrap w-100">
              {getTechnologies(project.technologies)}
            </div>
          </div>
          <div className="mt-3 card-footer bg-white">
            <a className="btn btn-share default-nav decoration-none fade-in slide-in mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href={project.github}>
              <i className="fab fa-github mr-2" />Github</a>
            <a className="btn btn-share default-nav decoration-none fade-in slide-in"
              target="_blank"
              rel="noopener noreferrer"
              href={project.live}>
              <i className="far fa-window-restore mr-2" />Live</a>
          </div>
        </div>
      </Col>
    );
  });
}

function truncateDescription(description, index) {
  if (index > 0) {
    const firstPeriod = description.indexOf('.');
    return description.slice(0, firstPeriod + 1);
  } else {
    return `${description.split('.', 2).join('.')}.`;
  }
}

function getTechnologies(project) {
  return project.map((technology, index) => {
    return <span key={index}
      className="badge custom-badge text-white my-1 ml-0 mr-2">{technology}</span>;
  });
}
