import React from 'react';
import devcon3 from '../images/devcon3.png';
import bcc2018 from '../images/bcc2018.png';
import pactSXSW from '../images/pactSXSW.png';
import SubscribeFrom from 'react-mailchimp-subscribe';

export default class Community extends React.Component {
  render() {
    return (
      <div name="community">
        <div className="container-fluid grayBG padTop">
          <div className="row col-centered">
            <h1 className="mx-auto pactGreen">Community Involvement</h1>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <h2 className="pactGreen">
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
                    width="60%"
                    src={devcon3}
                  />
                </a>
              </div>
            </div>
            <br />

            <div className="col-md-6">
              <div>
                <h2 className="pactGreen">
                  <center>Proud Gold Sponsor of BCC 2018!</center>
                </h2>
              </div>
              <div className="text-center">
                <a
                  href="http://sched.co/DZRO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="Block Crypto Con 2018" width="60%" src={bcc2018} />
                </a>
              </div>
            </div>
            <br />

            <div className="col-md-6">
              <h2 className="pactGreen">
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
                    width="60%"
                    src={pactSXSW}
                  />
                </a>
              </div>
            </div>
            <br />

            <div className="col-md-6 my-auto">
              <h2 className="pactGreen">
                <center>Newsletter</center>
              </h2>
              <div className="text-center">
                <Form />
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

const formProps = {
  action:
    'https://ethmediator.us15.list-manage.com/subscribe/post?u=0691403db710fafb9895da0a3&amp;id=fc30aaf8b0',
  messages: {
    inputPlaceholder: 'Email',
    btnLabel: 'Sign Up',
    sending: 'Submitting...',
    success: 'Success, please verify!',
    error: 'Enter valid email or already registered!'
  },
  styles: {
    sending: {
      fontSize: 18,
      color: 'auto'
    },
    success: {
      fontSize: 18,
      color: '#98c740'
    },
    error: {
      fontSize: 18,
      color: 'red'
    }
  }
};

const Form = () => <SubscribeFrom {...formProps} />;
