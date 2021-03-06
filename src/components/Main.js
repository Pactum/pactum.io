import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PactumBig from '../images/PactumMainLogo.png';
import SCT from './SCT';
import CSC from './CSC';
import SCC from './SCC';
import WhitepaperComp from './Whitepaper';
import Community from './Community';
import About from './About';
import Roadmap from './Roadmap';
import Team from './Team';
import Particles from './Particles';
import { Textfit } from 'react-textfit';

const Main = props => {
  return (
    <div>
      <Jumbotron fluid name="home">
        <Container fluid>
          <div className="row">
            <div className="col-md-12">
              <span className="title"> Make a Pact with Pactum! </span>
            </div>
            <div className="fixed-position-logo">
              <img alt="Pactum Logo" width="100%" src={PactumBig} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1>Accelerating the global transition to Blockchain</h1>
              <h3>
                Using our SC Engine, we aim to accelerate the transition to
                blockchain through Configurable Smart Contracts.
              </h3>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <div className="emptyspace">&nbsp;</div>
      <Container fluid>
        <div className="row col-centered">
          <div className="col-md-4">
            <SCT />
          </div>
          <div className="col-md-4">
            <CSC />
          </div>
          <div className="col-md-4">
            <SCC />
          </div>
        </div>
      </Container>
      <br />
      {/* <Particles /> */}
      <Community />
      <About />
      <WhitepaperComp />
      <Roadmap />
      <Team />
    </div>
  );
};

export default Main;
