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

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Container fluid={true} className="py-3 shadow-lg sticky-top">
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
            Kevin Akahoshi
            </NavbarBrand>
            <NavbarToggler onClick={this.handleToggle} navbar/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About Me</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink href="#skills">Skills</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink href="#applications">Applications</NavLink>
                </NavItem>
                <NavItem className="ml-md-5">
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
