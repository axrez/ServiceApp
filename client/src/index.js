import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const Index = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);


ReactDOM.render(<Index />, document.getElementById('root'));
