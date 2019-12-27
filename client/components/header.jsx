import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleNavClick(section) {
    document.getElementById(section).scrollIntoView(true);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <Container fluid={true} className="py-3 shadow-lg bg-white sticky-top">
          <Navbar color="faded" light expand="md" className="row">
            <NavbarBrand onClick={() => {
              window.scrollTo(0, 0);
              if (this.state.isOpen) {
                this.handleToggle();
              }
            }}
            className="pointer">
            Kevin Akahoshi
            </NavbarBrand>
            <NavbarToggler onClick={() => this.handleToggle()} navbar="true" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="pointer px-0" onClick={() => this.handleNavClick('about')}>About Me</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink className="pointer px-0" onClick={() => this.handleNavClick('skills')}>Skills</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink className="pointer px-0" onClick={() => this.handleNavClick('tools')}>Tools</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink className="pointer px-0" onClick={() => this.handleNavClick('applications')}>Applications</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink className="pointer px-0" onClick={() => this.handleNavClick('contact')}>Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
