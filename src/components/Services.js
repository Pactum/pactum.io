import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

export var Services = ({ match }) => (
    <div>
      <h2>Services</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Service} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  ),
  Service = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
