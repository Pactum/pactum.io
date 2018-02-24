import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class SCC extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          SCC
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <h3>SCC</h3>
              <h5>Smart Contract Creation</h5>
              <p>
                Creation of a smart contract via draggable UI-elements onto a
                canvas to visually design, configure, and develop your smart
                contract.
              </p>
            </CardBody>
          </Card>
        </Collapse>
        <br />
      </div>
    );
  }
}
