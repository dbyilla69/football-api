import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from '../axios-instances/axiosURL';
import * as actions from '../actions/index';
//import PlayerList from '../components/player-list';

class Players extends Component {
  componentDidMount() {
    this.props.onFetchPlayers();
  }

  render() {
    const { players } = this.props;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Jersey Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(players).map(player => (
            <tr key={player.player.id}>
              <td>{player.player.jerseyNumber}</td>
              <td>{player.player.lastName}</td>
              <td>{player.player.firstName}</td>
              <td>{player.player.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
