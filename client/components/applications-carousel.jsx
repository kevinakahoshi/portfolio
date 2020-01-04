import React from 'react';
import {
  Row,
  Col,
  Fade
} from 'reactstrap';
import {
  CSSTransition
} from 'react-transition-group';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: true,
      currentProject: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.previousHandler = this.previousHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  startTimer() {
    this.interval = setInterval(this.nextHandler, 10000);
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
    const currentProject = this.props.projects[this.state.currentProject];
    const technologies = currentProject.technologies.map((technology, index) => {
      return <span key={index} className="badge custom-badge text-white mr-2">{technology}</span>;
    });

    return (
      <CSSTransition in={this.state.showProjects}
        key={currentProject.id}
        appear={true}
        timeout={1000}
        classNames="fade">
        <Row>
          <Col md="6" sm="12">
            <div className="position-relative">
              <a href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer decoration-none position-relative">
                <Fade in={true}
                  tag="img"
                  src={currentProject.image}
                  alt={currentProject.alt}
                  className="img-fluid border rounded smooth-transition"
                  onMouseEnter={this.stopTimer}
                  onMouseLeave={this.startTimer} />
              </a>
            </div>
            <div className="my-3 d-flex">
              <div className="d-flex">
                <div className={`${this.state.currentProject === 0 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto mr-3 pointer`}
                  onClick={() => this.setState({ currentProject: 0 })}
                  onMouseEnter={this.stopTimer}
                  onMouseLeave={this.startTimer}
                  aria-label="First Project" />
                <div className={`${this.state.currentProject === 1 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto mr-3 pointer`}
                  onClick={() => this.setState({ currentProject: 1 })}
                  onMouseEnter={this.stopTimer}
                  onMouseLeave={this.startTimer}
                  aria-label="Second Project" />
                <div className={`${this.state.currentProject === 2 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto pointer`}
                  onClick={() => this.setState({ currentProject: 2 })}
                  onMouseEnter={this.stopTimer}
                  onMouseLeave={this.startTimer}
                  aria-label="Third Project" />
              </div>
              <div className="d-flex ml-auto carousel-controls-div">
                <button className="carousel-button smooth-transition pointer bg-white d-flex mr-3 rounded"
                  onClick={this.previousHandler}
                  aria-label="Previous" >
                  <i className="fas fa-chevron-left m-auto" />
                </button>
                <button className="carousel-button smooth-transition pointer bg-white d-flex mr-0 rounded"
                  onClick={this.nextHandler}
                  aria-label="Next" >
                  <i className="fas fa-chevron-right m-auto" />
                </button>
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="d-flex h-100">
              <Fade in={true}
                className="m-auto"
                onMouseEnter={this.stopTimer}
                onMouseLeave={this.startTimer}>
                <h6 className="h5 smooth-transition">{currentProject.name}</h6>
                <p className="smooth-transition">{currentProject.description}</p>
                <h6 className="h5 smooth-transition">Developed Using</h6>
                <div>
                  {technologies}
                </div>
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
