import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from '../axios-instances/axiosURL';
import * as actions from '../actions/index';
import PlayerList from '../containers/playerList';

class Players extends Component {
  componentDidMount() {
    this.props.onFetchPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <PlayerList players={players}/>
    );
  }
}

//In the state should I see the whole api state?
const mapStateToProps = state => ({ players: state.players.players });

//What should I see from dispatch?
const mapDispatchToProps = dispatch => ({
  onFetchPlayers: () => dispatch(actions.fetchPlayers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
