import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CitiesList} />
        <Route path="/add" component={AddCity} />
      </Switch>
    </Router>
  );
}

export default App;
