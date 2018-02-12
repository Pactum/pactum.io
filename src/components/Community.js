import React from 'react';
import devcon3 from '../images/devcon3.png';
import bcc2018 from '../images/bcc2018.png';

export default class Community extends React.Component {
  render() {
    return (
      <div name="community">
        <div className="container fluid">
          <div className="row col-centered">
            <h1 className="mx-auto">Community Involvement</h1>
          </div>
          <div className="row">
            <div className="col-6">
              <h2>
                <center>Proud Community Sponsor of Devcon3!</center>
              </h2>
              <a
                href="https://ethereumfoundation.org/devcon3/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="Ethereum Organization Devcon" src={devcon3} />
              </a>
            </div>

            <div className="col-6">
              <h2>
                <center>Proud Gold Sponsor of BCC 2018!</center>
              </h2>
              <a
                href="http://sched.co/DZRO"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img width="600px" alt="Block Crypto Con 2018" src={bcc2018} />
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
