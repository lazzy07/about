import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BubblesBackground from './components/BubblesBackground';
import Header from './components/Header';
import { HEADER_HEIGHT } from './constants';
import Homepage from './screens/Homepage';
import "./scss/grid.scss"
import "./scss/app.scss";
import Project from './screens/Project';
import { PROJECT, ROOT } from './routes';

const App = () => {
  return (
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <Switch>
        <Route exact path={PROJECT} component={Project} />
        <Route exact path={ROOT} component={Homepage} />
      </Switch>
      <Header />
      <div style={{ zIndex: 1 }}>
        <BubblesBackground />
      </div>
    </div>
  );
}

export default App;
