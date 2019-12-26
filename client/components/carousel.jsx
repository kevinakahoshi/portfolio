import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0,
      projects: [
        {
          id: 1,
          image: null,
          name: 'Spontaneous.ly',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aspernatur dignissimos totam, rem alias quaerat ducimus exercitationem repellendus commodi. Temporibus eum illo necessitatibus vel recusandae ullam laudantium nemo labore quaerat.',
          github: 'https://github.com/kevinakahoshi/spontaneous.ly',
          live: 'https://spontaneouslyapp.com/'
        },
        {
          id: 2,
          image: null,
          name: 'Coffeine Supply Co',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel similique perspiciatis magnam? Laboriosam, soluta, illo ab perspiciatis quae placeat ratione officiis quos delectus quasi, natus reprehenderit deleniti magni quod?',
          github: 'https://github.com/kevinakahoshi/coffeine-supply-co',
          live: 'https://coffeine.kevinakahoshi.com/'
        },
        {
          id: 3,
          image: null,
          name: 'Cyberpunk Logo Match',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum nemo sunt veniam inventore et quo commodi quia dolore laboriosam, officiis cumque impedit mollitia aliquid consectetur in ducimus, ab accusamus.',
          github: 'https://github.com/kevinakahoshi/cyberpunk-logo-match',
          live: 'https://cyberpunk.kevinakahoshi.com/'
        }
      ]
    };

    this.previousHandler = this.previousHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  previousHandler() {
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentProject--;
    if (currentState.currentProject === -1) {
      currentState.currentProject = 2;
    }
    this.setState(currentState);
  }

  nextHandler() {
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentProject++;
    if (currentState.currentProject === 3) {
      currentState.currentProject = 0;
    }
    this.setState(currentState);
  }

  render() {
    const currentProject = this.state.projects[this.state.currentProject];
    return (
      <Row>
        <Col md="6" sm="12">
          <div className="carousel d-flex border rounded">
            <div className="carousel-image">
            </div>
          </div>
          <div className="mt-3 d-flex">
            <div className="d-flex">
              <div className="my-auto"></div>
              <div className="indicator-active my-auto mr-3 pointer"></div>
              <div className="indicator my-auto mr-3 pointer"></div>
              <div className="indicator my-auto pointer"></div>
            </div>
            <div className="ml-auto carousel-controls-div">
              <button className="carousel-button mr-3 rounded"
                onClick={this.previousHandler}
              ><i className="fas fa-chevron-left" /></button>
              <button className="carousel-button mr-0 rounded"
                onClick={this.nextHandler}
              ><i className="fas fa-chevron-right" /></button>
            </div>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="d-flex h-100">
            <div className="m-auto">
              <h6 className="h5">{currentProject.name}</h6>
              <p>{currentProject.description}</p>
              <a href={currentProject.github}
                className="py-2 mr-2"
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-github mr-2"/> Github
              </a> |
              <a href={currentProject.live}
                className="py-2 ml-2"
                rel="noopener noreferrer"
                target="_blank">
                <i className="far fa-window-restore mr-2" /> Live
              </a>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Carousel;
