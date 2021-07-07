import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Airlines from './airlines';
import Airline from './airline';

const App = ({ name }) => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  )
};

App.propTypes = {
  name: PropTypes.string
};

export default App;
