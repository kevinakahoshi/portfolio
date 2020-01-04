import React from 'react';
import {
  Row,
  Col,
  Fade
} from 'reactstrap';

function Grid(props) {

  function getTechnologies(project) {
    return project.map((technology, index) => {
      return <span key={index}
        className="badge custom-badge text-white my-1 ml-0 mr-2">{technology}</span>;
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

  function getProjects(projectsArray) {
    return projectsArray.map((project, index) => {
      return (
        <Col lg="4"
          md="6"
          sm="12"
          key={index}
          className="mb-3">
          <Fade tag="div"
            className="card rounded border mb-3 h-100">
            <div className="card-body">
              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer decoration-none position-relative">
                <img src={project.image}
                  className="img-fluid border rounded mb-3"
                  alt={project.alt} />
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
              <a className="btn btn-share default-nav decoration-none mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}>
                <i className="fab fa-github mr-2" />Github</a>
              <a className="btn btn-share default-nav decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                href={project.live}>
                <i className="far fa-window-restore mr-2" />Live</a>
            </div>
          </Fade>
        </Col>
      );
    });
  }

  return (
    <Row>
      <div className="card-group">
        {getProjects(props.projects)}
      </div>
    </Row>
  );
}

export default Grid;
