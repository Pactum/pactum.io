import React from 'react';
import devcon3 from '../images/devcon3.png';
import bcc2018 from '../images/bcc2018.png';
import pactSXSW from '../images/pactSXSW.png';

export default class Community extends React.Component {
  render() {
    return (
      <div name="community">
        <div className="container-fluid">
          <div className="row col-centered">
            <h1 className="mx-auto">Community Involvement</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2>
                <center>Proud Community Sponsor of Devcon3!</center>
              </h2>
              <div className="text-center">
                <a
                  href="https://ethereumfoundation.org/devcon3/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    class="center-block"
                    alt="Ethereum Organization Devcon"
                    width="80%"
                    src={devcon3}
                  />
                </a>
              </div>
            </div>
            <br />

            <div className="col-md-6">
              <div>
                <h2>
                  <center>Proud Gold Sponsor of BCC 2018!</center>
                </h2>
              </div>
              <div className="text-center">
                <a
                  href="http://sched.co/DZRO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="Block Crypto Con 2018" width="80%" src={bcc2018} />
                </a>
              </div>
            </div>
            <br />

            <div className="col-md-6">
              <h2>
                <center>Panelist @ SXSW!</center>
              </h2>
              <div className="text-center">
                <a
                  href="https://schedule.sxsw.com/2018/events/PP99308"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    class="center-block"
                    alt="SXSW Panel"
                    width="80%"
                    src={pactSXSW}
                  />
                </a>
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
