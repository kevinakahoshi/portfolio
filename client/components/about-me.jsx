import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function AboutMe() {
  return (
    <div className="bg-light about-section content-div" id="about">
      <Container className="container-md">
        <Row>
          <Col md="4">
            <img src="images/portrait.png" className="img-fluid" />
          </Col>
          <Col md="8">
            <div className="position-relative heading-div">
              <h3 className="heading mb-4">About Me</h3>
            </div>
            <p>I’m Kevin Akahoshi, and I’m a developer that has a passion for technology and coding.</p>
            <p>I’ve always had an interest in technology, and ever since I can remember I’ve been involved in computers. My first taste of programming came in the form of a few computer science courses at UC Riverside, which gave me some exposure to HTML and a little bit of C++. Through my professional experiences, I continued to find myself drawn to tech.</p>
            <p>For the last four years, I’ve worked as an Account Manager in various organizations to help solve problems that our clients were having with technology. After working around many developers however, I decided to make the jump to fulfill my curiosity, and to pursue programming full time. I enrolled in an accelerated Full-Stack Web Development Program at LearningFuze.</p>
            <p>While enrolled in the program, I have learned languages like JavaScript (ES5 + ES6), React.js, jQuery, PHP, HTML, and CSS. I also became intimately familiar with tools like Git/Github, Postman, npm, and Webpack. Lastly, I participated in team-based hackathons, as well as solo projects, to build full-stack web applications. Experiencing all of this has solidified that I have made the right decision to pursue web development, and has helped feed my curiosity.</p>
            <p>Because I have years of experience working with clients, and seeing things from their point of view, I bring a unique perspective to the conversation. I’m the Account Manager gone rogue.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
