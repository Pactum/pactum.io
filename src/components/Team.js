import React from 'react';
import { Container } from 'reactstrap';
import micheal from '../images/team/micheal.jpg';
import matt from '../images/team/matt.jpg';
import mike from '../images/team/mike.jpg';
import rich from '../images/team/rich.jpg';
import patrick from '../images/team/patrick.jpg';
import james from '../images/team/james.jpg';
import navlogo3 from '../images/nav-logo3.png';
import transP from '../images/TransPLogo.png';
import { SocialIcon } from 'react-social-icons';

export default class Team extends React.Component {
  render() {
    return (
      <div name="team">
        <Container>
          <div className="row col-centered">
            <div className="col-md-4 px-4 mb-5" />
            <div className="col-md-4 px-4 mb-5">
              <h1>Founding Team</h1>
            </div>
            <div className="col-md-4 px-4 mb-5" />
          </div>
          <div className="row col-centered">
            <div className="col-md-4 px-4 mb-5">
              <img className="mb-1" alt="Matt" src={matt} />
              <p>
                <strong>Matt Swezey</strong> <br />
                CEO | Founder | Senior Dev
              </p>
              <SocialIcon url="https://www.linkedin.com/in/matt-swezey-46691755/" />
            </div>
            <div className="col-md-4 px-4 mb-5">
              <img className="mb-1" alt="Rich" src={rich} />
              <p>
                <strong>Rich Merrill</strong> <br />
                CTO | Co-Founder | Architect
              </p>
              <SocialIcon url="https://www.linkedin.com/in/rich-merrill-0196092/" />
            </div>
            <div className="col-md-4 px-4 mb-5">
              <img className="mb-1" alt="Mike" src={mike} />
              <p>
                <strong>Mike Alonso</strong> <br />
                COO | Co-Founder | Project Manager
              </p>
              <SocialIcon url="https://www.linkedin.com/in/michael--alonso/" />
            </div>
          </div>

          <div className="row col-centered">
            <div className="col-md-4 px-4 mb-5">
              <img className="mb-1" alt="Patrick" src={patrick} />
              <p>
                <strong>Patrick Merrill</strong> <br />
                Senior Dev
              </p>
              <SocialIcon url="https://www.linkedin.com/in/patrick-merrill-53806151/" />
            </div>
            <div className="col-md-4 px-4 mb-5">
              <img className="mb-1" alt="Micheal" src={micheal} />
              <p>
                <strong>Micheal Giles</strong> <br />
                Junior Dev
              </p>
              <SocialIcon url="https://www.linkedin.com/in/micheal-giles-9b36b3b6/" />
            </div>
            <div className="col-md-4 px-4 mb-5" />
          </div>

          <div className="row col-centered">
            <div className="col-md-4 px-4 mb-5" />
            <div className="col-md-4 px-4 mb-5">
              <h1>Advisors</h1>
            </div>
            <div className="col-md-4 px-4 mb-5" />
          </div>

          <div className="row col-centered">
            <div className="col-md-4 px-4 mb-5">&nbsp;</div>
            <div className="col-md-4 px-4 mb-5">
              <img
                className="mb-1"
                width="40%"
                alt="Pactum Small Logo"
                src={transP}
              />
              <p> Coming soon... </p>
            </div>
            <div className="col-md-4 px-4 mb-5">&nbsp;</div>
          </div>
        </Container>
      </div>
    );
  }
}
