import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: true,
      currentProject: 0,
      fadeOut: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.slideChange = this.slideChange.bind(this);
    this.interval = null;
  }

  startTimer() {
    this.stopTimer();
    let position = this.state.currentProject + 1;
    if (position === 3) {
      position = 0;
    }
    this.interval = setInterval(() => this.slideChange(position), 9500);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  slideChange(newPosition) {
    const currentState = JSON.parse(JSON.stringify(this.state));
    this.stopTimer();
    this.setState({ fadeOut: true });
    setTimeout(() => {
      currentState.currentProject = newPosition;
      currentState.fadeOut = false;
      this.setState(currentState);
      this.startTimer();
    }, 500);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const currentProject = this.props.projects[this.state.currentProject];
    const fade = this.state.fadeOut ? 'fade-out' : 'fade-in';
    const slide = this.state.fadeOut ? 'slide-out-10' : 'slide-in-10';
    const technologies = currentProject.technologies.map((technology, index) => {
      return <span key={index} className={`badge custom-badge text-white mr-2 ${slide}`}>{technology}</span>;
    });
    return (
      <Row>
        <Col md="6" sm="12">
          <div className={`position-relative ${fade}`}>
            <a href={currentProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer decoration-none position-relative">
              <img
                src={currentProject.image}
                alt={currentProject.alt}
                className={`img-fluid border rounded smooth-transition ${fade}`}
                onMouseEnter={this.stopTimer}
                onMouseLeave={this.startTimer} />
            </a>
          </div>
          <div className="my-3 d-flex">
            <div className="d-flex">
              <div className={`${this.state.currentProject === 0 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto mr-3 pointer`}
                onClick={() => this.slideChange(0)}
                onMouseEnter={this.stopTimer}
                onMouseLeave={this.startTimer}
                aria-label="First Project" />
              <div className={`${this.state.currentProject === 1 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto mr-3 pointer`}
                onClick={() => this.slideChange(1)}
                onMouseEnter={this.stopTimer}
                onMouseLeave={this.startTimer}
                aria-label="Second Project" />
              <div className={`${this.state.currentProject === 2 ? 'indicator-active' : 'indicator'} carousel-indicator my-auto pointer`}
                onClick={() => this.slideChange(2)}
                onMouseEnter={this.stopTimer}
                onMouseLeave={this.startTimer}
                aria-label="Third Project" />
            </div>
            <div className="d-flex ml-auto carousel-controls-div">
              <button className="carousel-button smooth-transition pointer bg-white d-flex mr-3 rounded"
                onClick={() => {
                  let nextProject = this.state.currentProject - 1;
                  if (nextProject === -1) {
                    nextProject = 2;
                  }
                  this.slideChange(nextProject);
                }}
                aria-label="Previous" >
                <i className="fas fa-chevron-left m-auto" />
              </button>
              <button className="carousel-button smooth-transition pointer bg-white d-flex mr-0 rounded"
                onClick={() => {
                  let nextProject = this.state.currentProject + 1;
                  if (nextProject === 3) {
                    nextProject = 0;
                  }
                  this.slideChange(nextProject);
                }}
                aria-label="Next" >
                <i className="fas fa-chevron-right m-auto" />
              </button>
            </div>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className={'d-flex h-100'}>
            <div className={`m-auto ${slide}`}>
              <h6 className={`h5 smooth-transition ${slide}`}>{currentProject.name}</h6>
              <p className={`smooth-transition ${slide}`}>{currentProject.description}</p>
              <h6 className={`h5 smooth-transition ${slide}`}>Developed Using</h6>
              <div className={`${slide}`}>
                {technologies}
              </div>
              <div className={`${slide}`}>
                <a href={currentProject.github}
                  className={'py-2 mr-3 icon-active'}
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="fab fa-github mr-2 icon-active"/>Github
                </a>|
                <a href={currentProject.live}
                  className={'py-2 ml-3 icon-active'}
                  rel="noopener noreferrer"
                  target="_blank">
                  <i className="far fa-window-restore mr-2 icon-active" />Live
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Carousel;
