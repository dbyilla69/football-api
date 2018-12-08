import React from 'react';

const PlayerList = ({players}) => {
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
  </table> );
}

export default PlayerList;
