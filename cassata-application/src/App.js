import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">        
            <Navigation />
            <Switch>    
                <Route exact path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Profile' component={Profile}/>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
