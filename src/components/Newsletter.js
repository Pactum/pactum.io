import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import SubscribeFrom from 'react-mailchimp-subscribe';

const formProps = {
  action:
    'https://ethmediator.us15.list-manage.com/subscribe/post?u=0691403db710fafb9895da0a3&amp;id=fc30aaf8b0',
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

render(<Form />, document.getElementById('root'));
