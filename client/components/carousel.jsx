import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 1,
      projects: [
        {
          id: 1,
          image: null,
          name: 'Spontaneous.ly',
          description: '',
          github: null,
          live: null
        },
        {
          id: 2,
          image: null,
          name: 'Coffeine Supply Co',
          description: '',
          github: null,
          live: null
        },
        {
          id: 3,
          image: null,
          name: 'Cyberpunk Logo Match',
          description: '',
          github: null,
          live: null
        }
      ]
    };

    this.previousHandler = this.previousHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
  }

  previousHandler() {
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentImage--;
    if (currentState.currentImage === 0) {
      currentState.currentImage = 3;
    }
    this.setState(currentState);
  }

  nextHandler() {
    const currentState = JSON.parse(JSON.stringify(this.state));
    currentState.currentImage++;
    if (currentState.currentImage === 4) {
      currentState.currentImage = 1;
    }
    this.setState(currentState);
  }

  render() {
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
              <h6 className="h5">Project 1</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aspernatur itaque nisi, delectus, hic, esse molestias quo voluptatibus quasi doloremque veritatis velit sunt? Non veritatis quasi vel quidem, sequi maiores.</p>
              <a href="#" className="py-2 mr-2">
                <i className="fab fa-github mr-2"/> Github
              </a> | <a href="#" className="py-2 ml-2">
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
