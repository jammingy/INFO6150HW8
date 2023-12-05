// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Vienna from './components/Vienna';
import Sydney from './components/Sydney';
import CapeTown from './components/CapeTown';
import About from './components/About';
import Error404 from './components/Error404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/destinations/vienna" exact component={Vienna} />
        <Route path="/destinations/sydney" exact component={Sydney} />
        <Route path="/destinations/cape-town" exact component={CapeTown} />
        <Route path="/about" exact component={About} />
        <Route component={({ location }) => <Error404 location={location} />} />
      </Switch>
    </Router>
  );
};

export default App;
