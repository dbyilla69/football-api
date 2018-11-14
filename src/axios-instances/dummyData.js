// const data = {
//   lastUpdatedOn: '2018-11-10T19:45:27.200Z',
//   players: [
//     {
//       player: {
//         age: 25,
//         alternatePositions: [],
//         birthCity: 'Mobile, AL',
//         birthCountry: 'USA',
//         birthDate: '1993-06-13',
//         college: null,
//         currentContractYear: null,
//         currentInjury: null,
//         currentRosterStatus: 'ROSTER',
//         currentTeam: { id: 61, abbreviation: 'DET' },
//         firstName: 'Ameer',
//         handedness: null,
//         height: "5'9",
//         highSchool: null,
//         id: 6826,
//         jerseyNumber: 21,
//         lastName: 'Abdullah',
//         officialImageSrc:
//           'http://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ABD647726.png',
//         primaryPosition: 'RB',
//         rookie: false,
//         socialMediaAccounts: [],
//         weight: 205,
//         teamAsOfDate: { id: 61, abbreviation: 'DET' }
//       }
//     }
//   ]
// };


import axios from 'axios';

let username = '8d5243ad-bd42-48dc-860b-3b58af';
let password = 'MYSPORTSFEEDS';

const teamUrl = axios.get({
  baseURL: `https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json`,
  headers: {
    Authorization: 'Basic ' + username + ':' + password,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

console.log(teamUrl.headers);








console.log(teamUrl.data.players.map(player => player.player.firstName));
