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
    //const sample = Object.values(players.players).map(player => player.player.firstName);
    //playerList = this.props.players.map(player => player.player.firstName);
    //const playerList = players.map(player => player.player.firstName);
    //const { players } = this.props;

    return (
      // <table className='table table-sm'>
      //   <thead>
      //     <tr>
      //       <th scope='col'>#</th>
      //       <th scope='col'>First</th>
      //       <th scope='col'>Last</th>
      //       <th scope='col'>Handle</th>
      //     </tr>
      //   </thead>
      //   <tbody />
      // </table>
      <h1>Testing</h1>
      // { playerList}
      //{ sample}
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
