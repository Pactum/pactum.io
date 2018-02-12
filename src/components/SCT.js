import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class SCT extends React.Component {
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
          SCT
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <h3>SCT</h3>
              <h5>Smart Contract Templates</h5>
              <p>
                Templates present through a slick UI for simple, robust fill in
                blank deployable digital agreements to the EVM.
              </p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
