import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Travels from './Travels';
import UnderContrustction from './UnderConstruction';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/travels" component={Travels} />
        <Route component={UnderContrustction} />
      </Switch>
    </Router>
  );
}
