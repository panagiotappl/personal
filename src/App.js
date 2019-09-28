import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Travels from './Travels';
import {Japan} from './Countries';
import UnderContrustction from './UnderConstruction';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/travels" component={Header} />
        <Route path="/travels/:path" component={Header} />
      </Switch>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/travels" component={Travels} />
        <Route exact path="/travels/japan" component={Japan} />

        <Route component={UnderContrustction} />
      </Switch>
    </Router>
  );
}
