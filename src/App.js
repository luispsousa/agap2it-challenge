import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EpisodeScreen from './screens/EpisodeScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/episode/:id' component={EpisodeScreen}></Route>
        <Route path='/' component={HomeScreen}></Route>
      </Switch>
    </Router>
  );
};

export default App;
