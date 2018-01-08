import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './components/Login';

const Router = () => {
  return (
    <main>
      {/* <Switch> */}
        <Route exact path="/login" component={Login} />
      {/* </Switch> */}
    </main>
  );
}

export default Router;
