import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import NavLogo from '../images/nav-logo2.png';
import twitter from '../images/social/twitter-icon.png';
import facebook from '../images/social/facebook-icon.png';
import Email from '../images/social/email-icon.png';
import discord from '../images/social/discord.png';
import medium from '../images/social/medium-icon.png';
import { Link } from 'react-scroll';
import Sticky from 'react-sticky-el';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Sticky topOffset={-1}>
        <header>
          <Navbar color="faded" light expand="lg">
            <div className="row">
              <div className="col-4 moveLogo">
                <NavbarBrand>
                  <img src={NavLogo} alt="Nav Logo" />
                </NavbarBrand>
              </div>
              <div className="col-8">
                <a
                  href="https://twitter.com/pactumio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-icon moveIcons"
                    alt="Twitter Icon"
                    src={twitter}
                  />
                </a>
                <a
                  href="https://facebook.com/pactumio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-icon moveIcons1"
                    alt="Facebook Icon"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://discord.gg/bfB5ThG"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-icon  moveIcons2"
                    alt="Discord Icon"
                    src={discord}
                  />
                </a>
                <a
                  href="https://medium.com/pactum"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="social-icon  moveIcons3"
                    alt="Medium Icon"
                    src={medium}
                  />
                </a>
                {/* <a href="mailto:pact@pactum.io">
                  <img
                    className="social-icon moveIcons4"
                    alt="Email Icon"
                    src={Email}
                  />
                </a> */}
              </div>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto nav-font" navbar>
                <NavItem>
                  <NavLink>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Home
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="community"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={this.handleSetActive}
                    >
                      Community
                    </Link>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                <NavLink href="/beta">Beta</NavLink>
              </NavItem> */}
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={this.handleSetActive}
                    >
                      About
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="whitepaper"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={this.handleSetActive}
                    >
                      White Paper
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={this.handleSetActive}
                    >
                      Road Map
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onSetActive={this.handleSetActive}
                    >
                      Team
                    </Link>
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                <NavLink href="/services">Services</NavLink>
              </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </Sticky>
    );
  }
}
