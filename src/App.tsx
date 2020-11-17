import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BubblesBackground from './components/BubblesBackground';
import Header from './components/Header';
import { HEADER_HEIGHT } from './constants';
import Homepage from './screens/Homepage';
import "./scss/app.scss";

const App = () => {
  return (
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <Switch>
        <Route exact path="/about">
          <Homepage />
        </Route>
      </Switch>
      <Header />
      <div style={{ zIndex: 1 }}>
        <BubblesBackground />
      </div>
    </div>
  );
}

export default App;
