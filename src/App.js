import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import BurgerStuff from './burgerBody/BurgerTable';
import Ecosystem from './burgerBody/Ecosystem';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <div className="header">
        <img src={logo} className="appLogo" alt="logo" />
        <Link to="/burgerBuilder">
          <div className="burgerBuild">Burger Builder</div>
        </Link>
        <Link to="/ecosystem">
          <div className="burgerBuild">Ecosystm</div>
        </Link>
      </div>
      {/*<div className="burgerDiv">
        <img src={require('./images/burger.png')} className="burgerImg" alt="logo" />
      </div>*/}
      
      <Route path="/burgerBuilder" component={BurgerStuff} />
      <Route path="/ecosystem" component={Ecosystem} />
      </div>
      </Router>
    );
  }
}

export default App;
