import React from 'react';
import { Progress } from 'reactstrap';
import WhitepaperIcon from '../images/whitepaper-icon2.png';

export default class Whitepaper extends React.Component {
  render() {
    return (
      <div name="whitepaper">
        <div className="container">
          <div className="row col-centered">
            <h1 className="mx-auto">White Paper</h1>
          </div>
          <div className="text-center">
            <img alt="White Paper Icon" src={WhitepaperIcon} />
          </div>
          <br />
          <Progress multi>
            <Progress bar color="success" value="80" />
          </Progress>
          <div className="text-center">
            <h4>
              For us, building our Beta product is the core priority. But don't
              worry, we're still doing work on the whitepaper. We'll update the
              chart as often as we can to keep you up to date!
            </h4>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
