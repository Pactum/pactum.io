import React from 'react';
import { Progress } from 'reactstrap';
import { Icon } from 'react-fa';

export default class Roadmap extends React.Component {
  render() {
    return (
      <div name="roadmap">
        <div className="container">
          <div className="row col-centered">
            <h1 className="mx-auto">Road Map</h1>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <ul className="list-unstyled">
                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cog" size="2x" /> &nbsp;{' '}
                    <strong>Q4 2017</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="100" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Internal Alpha Build
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="100" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Phase I: Use Case Definitions
                  </p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cog" spin size="2x" /> &nbsp;<strong>
                      Q1 2018
                    </strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="40" />
                  </Progress>
                  <p className="featured-list-icon-text">Closed Beta Build</p>
                  <Progress multi>
                    <Progress bar color="success" value="60" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Development Plan Release
                  </p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cogs" size="2x" /> &nbsp;{' '}
                    <strong>Q2 2018</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="10" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Open Beta Build & Prep
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="30" />
                  </Progress>
                  <p className="featured-list-icon-text">Crowdsale Prep</p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="line-chart" size="2x" /> &nbsp;{' '}
                    <strong>Q3 2018</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">Open Beta Release</p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">Crowdsale Launch</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled">
                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cogs" spin size="2x" /> &nbsp;{' '}
                    <strong>Q4 2018</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Open Beta v2.0 Build & Prep
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Smart Contract Market Place Build
                  </p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cog" pulse size="2x" />
                    <Icon name="cogs" size="2x" /> &nbsp;{' '}
                    <strong>Q1 2019</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Open Beta v2.0 Release
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Smart Contract Market Place Beta
                  </p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="cog" spin size="2x" />
                    <Icon name="cogs" spin size="2x" /> &nbsp;{' '}
                    <strong>Q2 2019</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">Mainnet Prep</p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Smart Contract Market Place Beta
                  </p>
                </li>

                <li className="m-b-lg">
                  <p className="featured-list-icon-text m-b-0 text-primary">
                    <Icon name="handshake-o" size="2x" /> &nbsp;{' '}
                    <strong>Q3 2019</strong>
                  </p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">Mainnet Rollout</p>
                  <Progress multi>
                    <Progress bar color="success" value="0" />
                  </Progress>
                  <p className="featured-list-icon-text">
                    Smart Contract Market Place Mainnet Prep
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="container col-centered">
            <div>Subject to Change</div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
