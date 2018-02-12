import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class CSC extends React.Component {
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
        <div>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}
          >
            CSC
          </Button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <h3>CSC</h3>
              <h5>Configurable Smart Contracts</h5>
              <p>
                Templates that have advance configurable options to allow
                greater flexibility for end users.
              </p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
