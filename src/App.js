import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './components/Main';
import Beta from './components/Beta';
import { Services } from './components/Services';

const PactumIO = () => (
  <Layout>
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/beta" component={Beta} />
        <Route path="/about" />
        <Route path="/whitepaper" />
        <Route path="/roadmap" />
        <Route path="/services" component={Services} />
      </div>
    </Router>
  </Layout>
);

export default PactumIO;
