import axios from 'axios';

let username = '8d5243ad-bd42-48dc-860b-3b58af';
let password = 'MYSPORTSFEEDS';

 export const teamUrl = axios.create({
    baseURL: `https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json`,
    timeout: 1000,
    headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
});
