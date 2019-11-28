import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Travels from './travels/Travels';
import { Country } from './travels/Countries';
import About from './about/About';
import UnderContrustction from './UnderConstruction';
import { japanSummary } from './travels/summary';
import { japanDays } from './travels/days';

const Japan = ({location}) => (
  <Country
    title="Japan - Two Week Iterinary"
    subTitle="19 Apr - 5 May"
    summary={japanSummary}
    days={japanDays}
    location={location}
  />
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={Header} />
        <Route path="/travels" component={Header} />
        <Route path="/travels/:path" component={Header} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/travels" component={Travels} />
        <Route exact path="/travels/japan" component={Japan} />
        <Route component={UnderContrustction} />
      </Switch>
    </Router>
  );
}
