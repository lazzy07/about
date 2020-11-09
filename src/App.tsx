import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './screens/Homepage';
import "./scss/app.scss";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
