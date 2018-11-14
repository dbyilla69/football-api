import axios from 'axios';

// let username = '8d5243ad-bd42-48dc-860b-3b58af';
// let password = 'MYSPORTSFEEDS';

// const teamUrl = axios.get({
//     baseURL: `https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json`,
//     headers: {
//         Authorization: 'Basic ' + btoa(username + ':' + password),
//         'Cache-Control': 'no-cache, no-store, must-revalidate'
//     }
// });
//  console.log(teamUrl);

// const players = await axios.get('/players.json');
// const test= players.map((player) => player.player.firstName)
// console.log(test);

const test = axios.get(`https://jsonplaceholder.typicode.com/users`)
console.log(test.map(user => user.name));
