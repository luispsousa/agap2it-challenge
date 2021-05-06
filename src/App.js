import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import HomeScreen from './screens/HomeScreen';
import EpisodeScreen from './screens/EpisodeScreen';

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;

  max-width: 960px;

  padding-right: 10px;
  padding-left: 10px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Switch>
          <Route path='/episode/:id' component={EpisodeScreen}></Route>
          <Route path='/' component={HomeScreen}></Route>
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
