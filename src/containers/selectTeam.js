import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import PlayerList from '../containers/playerList';

class Teams extends Component {
  componentDidMount() {
    this.props.onFetchTeams();
  }

  render() {
    const { teams } = this.props;

      return <PlayerList players={teams} />;
  }
}

//In the state should I see the whole api state?
const mapStateToProps = state => ({ teams: state.teams.players });

//What should I see from dispatch?
const mapDispatchToProps = dispatch => ({
  onFetchTeams: () => dispatch(actions.fetchTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);