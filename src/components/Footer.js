import React from 'react';
import ethercasts from '../images/social/ethercasts-icon.png';
import { SocialIcon } from 'react-social-icons';
import twitter from '../images/social/twitter-icon.png';
import facebook from '../images/social/facebook-icon.png';
import discord from '../images/social/discord.png';
import medium from '../images/social/medium-icon.png';
import reddit from '../images/social/reddit.png';
import linkedin from '../images/social/linkedin.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer" name="footer">
        <div className="container">
          <div className="row col-centered">
            <div className="col-md-2">
              <ul className="list-unstyled" />
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h6 className="text-uppercase">Pactum IO</h6>
                </li>
                <li>Features</li>
                <li>Use Cases</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <h6 className="text-uppercase">Social</h6>
                </li>
                <li>
                  <a
                    href="https://facebook.com/pactumio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      alt="Facebook Icon"
                      src={facebook}
                    />
                  </a>
                  <a
                    href="https://medium.com/pactum"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      alt="Medium Icon"
                      src={medium}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/bfB5ThG"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      alt="Discord Icon"
                      src={discord}
                    />
                  </a>
                  <SocialIcon
                    url="https://github.com/pactum"
                    style={{ height: 40, width: 40, marginTop: '10px' }}
                  />
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/pactum"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      width="35px"
                      alt="LinkedIn Icon"
                      src={linkedin}
                    />
                  </a>
                  <a
                    href="https://twitter.com/pactumio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      alt="Twitter Icon"
                      src={twitter}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dapps.ethercasts.com/dapp/pactum"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      width="35px"
                      alt="Ethercasts Icon"
                      src={ethercasts}
                    />
                  </a>
                  <a
                    href="https://www.reddit.com/r/pactum"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="social-icon"
                      width="35px"
                      alt="Reddit Icon"
                      src={reddit}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <h6 className="text-uppercase">Legal</h6>
                </li>
                <li>Terms</li>
                <li>Legal</li>
                <li>Privacy</li>
                <li>License</li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <h6 className="text-uppercase">In the Press</h6>
                </li>
                <li>
                  <a
                    href="https://www.ethnews.com/pactum-working-to-enable-entry-level-development-of-ethereum-contracts"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ETH News
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitcoinexchangeguide.com/pactum/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Bitcoin Exchange Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="bottomFooter" className="container">
          <div className="row col-centered">
            <div className="col-md-4" />
            <div className="col-md-4">
              <h4>&copy;{new Date().getFullYear()} PACTUM IO, LLC</h4>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}
