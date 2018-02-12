import React from 'react';
import ReactDOM from 'react-dom';
import Team from '../Team';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Team />, div);
  ReactDOM.unmountComponentAtNode(div);
});
