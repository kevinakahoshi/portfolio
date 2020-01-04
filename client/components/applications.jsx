import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Carousel from './applications-carousel';
import Grid from './applications-grid';

class Applications extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'grid',
      projects: [
        {
          id: 1,
          image: '/images/spontaneously-carousel.jpg',
          alt: 'Man on skateboard with colorful powder going everywhere and text overlay that says Spontaneous.ly',
          name: 'Spontaneous.ly',
          description: 'Spontaneous.ly is a full stack application for users that want to embark on a spontaneous adventure.  Users can enter their zipcode, add filtering for results, and choose activities based on the returned results.  By attending activities, users will gain points, as well as see the other users attending the activity.  If users don\'t like the activities they are presented, they have the option to spend their points to go back to the filtering screen, or cancel their reservation for a given activity',
          technologies: ['React.js', 'React Router', 'JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
          github: 'https://github.com/kevinakahoshi/spontaneous.ly',
          live: 'https://spontaneouslyapp.com/'
        },
        {
          id: 2,
          image: '/images/coffeine-carousel.jpg',
          alt: 'Coffee bean roasting machine filled with fresh coffee beans with a text overlay that says Coffeine Supply Co.',
          name: 'Coffeine Supply Co',
          description: 'Coffeine Supply Co is a full stack applicaiton developed for coffee lovers interested in coffee supplies.  Users can add coffee related products to their cart, view or edit their cart, and go through the checkout process like a real e-commerce webstore.',
          technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
          github: 'https://github.com/kevinakahoshi/coffeine-supply-co',
          live: 'https://coffeine.kevinakahoshi.com/'
        },
        {
          id: 3,
          image: '/images/cyberpunk-carousel.jpg',
          alt: 'Slightly blurred background of a digital interface with a text overlay that says Cyberpunk Logo Match',
          name: 'Cyberpunk Logo Match',
          technologies: ['jQuery', 'JavaScript', 'HTML', 'CSS'],
          description: 'Cyberpunk Logo Match is a memory matching game based on the dystopian future.  Users need to match corporate sponsor logos in under 60 seconds with above 50% accuracy to avoid being infected with malicious software.',
          github: 'https://github.com/kevinakahoshi/cyberpunk-logo-match',
          live: 'https://cyberpunk.kevinakahoshi.com/'
        }
      ]
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    if (this.state.view === 'carousel') {
      this.setState({ view: 'grid' });
    } else {
      this.setState({ view: 'carousel' });
    }
  }

  render() {
    return (
      <div className="applications-section bg-white" id="applications">
        <Container>
          <Row>
            <Col xs="12">
              <h3 className="text-center heading mb-4 spread">Applications</h3>
              <div className="d-flex flex-direction-row">
                <div className="d-flex mx-auto mb-3">
                  <div className="mr-3">
                    <i className="fas fa-grip-horizontal small-font default-nav pointer"
                      onClick={() => this.setState({ view: 'grid' })} />
                  </div>
                  <div>
                    <div className="toggle-outer bg-secondary rounded pointer"
                      onClick={this.toggleView}>
                      <div className={`toggle-inner bg-white border rounded ${this.state.view === 'carousel' ? 'right' : 'left'}`} />
                    </div>
                  </div>
                  <div className="ml-3">
                    <i className="far fa-images small-font default-nav pointer"
                      onClick={() => this.setState({ view: 'carousel' })} />
                  </div>
                </div>
              </div>
              {this.state.view === 'carousel' ? <Carousel projects={this.state.projects} /> : <Grid projects={this.state.projects}/>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Applications;
