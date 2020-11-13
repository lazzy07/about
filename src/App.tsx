import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { HEADER_HEIGHT } from './constants';
import Homepage from './screens/Homepage';
import "./scss/app.scss";

const App = () => {
  return (
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Header />
    </div>
  );
}

export default App;
