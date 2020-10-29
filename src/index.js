import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/menu';
import Cadastro from './pages/cadastro';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route path='/' component ={Home} />
      <Route path='/' component ={Cadastro} />
      <Route path='/' component ={Home} />
      <Route path='/' component ={Home} />
    </Switch> 
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
