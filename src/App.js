import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Teams from './pages/teams/Teams';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Route path="/teams" component={Teams} />
        </div>
      </Router>
    );
  }
}

