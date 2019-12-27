import React from 'react';
import {
  Row,
  Col,
  Fade
} from 'reactstrap';
import {
  CSSTransition
  // TransitionGroup
} from 'react-transition-group';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      showProjects: true,
      currentProject: 0,
      projects: [
        {
          id: 1,
          image: './images/spontaneously-carousel.jpg',
          name: 'Spontaneous.ly',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aspernatur dignissimos totam, rem alias quaerat ducimus exercitationem repellendus commodi. Temporibus eum illo necessitatibus vel recusandae ullam laudantium nemo labore quaerat.',
          github: 'https://github.com/kevinakahoshi/spontaneous.ly',
          live: 'https://spontaneouslyapp.com/'
        },
        {
          id: 2,
          image: './images/coffeine-carousel.jpg',
          name: 'Coffeine Supply Co',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel similique perspiciatis magnam? Laboriosam, soluta, illo ab perspiciatis quae placeat ratione officiis quos delectus quasi, natus reprehenderit deleniti magni quod?',
          github: 'https://github.com/kevinakahoshi/coffeine-supply-co',
          live: 'https://coffeine.kevinakahoshi.com/'
        },
        {
          id: 3,
          image: './images/cyberpunk-carousel.jpg',
          name: 'Cyberpunk Logo Match',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum nemo sunt veniam inventore et quo commodi quia dolore laboriosam, officiis cumque impedit mollitia aliquid consectetur in ducimus, ab accusamus.',
          github: 'https://github.com/kevinakahoshi/cyberpunk-logo-match',
          live: 'https://cyberpunk.kevinakahoshi.com/'
        }
      ]
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.previousHandler = this.previousHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  startTimer() {
    this.interval = setInterval(this.nextHandler, 5000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  previousHandler() {
    this.stopTimer();
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentProject--;
    if (currentState.currentProject === -1) {
      currentState.currentProject = 2;
    }
    this.setState(currentState);
    this.startTimer();
  }

  nextHandler() {
    this.stopTimer();
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentProject++;
    if (currentState.currentProject === 3) {
      currentState.currentProject = 0;
    }
    this.setState(currentState);
    this.startTimer();
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const currentProject = this.state.projects[this.state.currentProject];
    return (
      <CSSTransition in={this.state.showProjects}
        key={currentProject.id}
        appear={true}
        timeout={1000}
        classNames="fade">
        <Row>
          <Col md="6" sm="12">
            <Fade in={true}
              tag="img"
              src={currentProject.image}
              className="img-fluid border rounded smooth-transition" />
            <div className="mt-3 d-flex">
              <div className="d-flex">
                <div className="my-auto"></div>
                <div className={`${this.state.currentProject === 0 ? 'indicator-active' : 'indicator'} my-auto mr-3 pointer`}></div>
                <div className={`${this.state.currentProject === 1 ? 'indicator-active' : 'indicator'} my-auto mr-3 pointer`}></div>
                <div className={`${this.state.currentProject === 2 ? 'indicator-active' : 'indicator'} my-auto pointer`}></div>
              </div>
              <div className="d-flex ml-auto carousel-controls-div">
                <button className="carousel-button smooth-transition pointer bg-white d-flex mr-3 rounded"
                  onClick={this.previousHandler}
                ><i className="fas fa-chevron-left m-auto" /></button>
                <button className="carousel-button smooth-transition pointer bg-white d-flex mr-0 rounded"
                  onClick={this.nextHandler}
                ><i className="fas fa-chevron-right m-auto" /></button>
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="d-flex h-100">
              <Fade in={true}
                className="m-auto">
                <h6 className="h5 smooth-transition">{currentProject.name}</h6>
                <p className="smooth-transition">{currentProject.description}</p>
                <a href={currentProject.github}
                  className="py-2 mr-3"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fab fa-github mr-2"/>Github
                </a>|
                <a href={currentProject.live}
                  className="py-2 ml-3"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="far fa-window-restore mr-2" />Live
                </a>
              </Fade>
            </div>
          </Col>
        </Row>
      </CSSTransition>
    );
  }
}

export default Carousel;
