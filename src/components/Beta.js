import React from 'react';
import SubscribeFrom from 'react-mailchimp-subscribe';

export default class Beta extends React.Component {
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
        <Form />
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
      color: 'green'
    },
    error: {
      fontSize: 18,
      color: 'red'
    }
  }
};

const Form = () => <SubscribeFrom {...formProps} />;
