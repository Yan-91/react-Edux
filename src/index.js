import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/menu';
import Cadastro from './pages/cadastro';
import Login from './pages/login'
import naoEncontrada from './pages/naoEncontrada'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import NaoEncotrada from './pages/naoEncontrada';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/cadastro' component={Cadastro}/>
      <Route path='/ranking' component={NaoEncotrada}/>
      <Route path='/conquistas' component={NaoEncotrada}/>
    </Switch>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
