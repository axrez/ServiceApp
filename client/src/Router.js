import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Frontpage from './components/Frontpage';


const Router = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </main>
);


export default Router;
