import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import Teams from './pages/teams/teams';
import Players from './containers/players';
import SelectTeams from './containers/selectTeam';

export default class App extends Component {
  render() {
    return <Router>
        <div className='app-container'>
          <Route path='/players' component={Players} />
          <Route path='/teams' component={SelectTeams} />
        </div>
      </Router>;
  }
}
