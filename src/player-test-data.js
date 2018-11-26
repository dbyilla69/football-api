const values = (object = {}) =>
    Object.keys(object).map(key => object[key]);

const data = {
    lastUpdatedOn: '2018-11-23T12:45:19.546Z',
    players: [
        {
            player: {
                id: 8343,
                firstName: 'Tyrell',
                lastName: 'Adams',
                primaryPosition: 'LB',
                alternatePositions: [],
                jerseyNumber: 44,
                currentTeam: {
                    id: 64,
                    abbreviation: 'HOU'
                },
                currentRosterStatus: 'ROSTER',
                currentInjury: null,
                height: '6\'2"',
                weight: 228,
                birthDate: '1992-04-10',
                age: 26,
                birthCity: null,
                birthCountry: null,
                rookie: false,
                highSchool: null,
                college: null,
                handedness: null,
                officialImageSrc: null,
                socialMediaAccounts: [],
                currentContractYear: null,
                drafted: null,
                externalMappings: []
            },
            teamAsOfDate: {
                id: 64,
                abbreviation: 'HOU'
            }
        },
        {
            player: {
                id: 14693,
                firstName: 'Jordan',
                lastName: 'Akins',
                primaryPosition: 'TE',
                alternatePositions: [],
                jerseyNumber: null,
                currentTeam: {
                    id: 64,
                    abbreviation: 'HOU'
                },
                currentRosterStatus: 'ROSTER',
                currentInjury: null,
                height: '6\'3"',
                weight: 237,
                birthDate: '1992-04-19',
                age: 26,
                birthCity: 'Locust Grove, GA',
                birthCountry: 'USA',
                rookie: true,
                highSchool: null,
                college: null,
                handedness: null,
                officialImageSrc: null,
                socialMediaAccounts: [],
                currentContractYear: null,
                drafted: null,
                externalMappings: []
            },
            teamAsOfDate: {
                id: 64,
                abbreviation: 'no'
            }
        }
    ]
};

// const example = Object.values(data.players).map(player => player.player.firstName)
// console.log(example);

// const example2 = Object.values(data.players).filter(
//     player => player.player.currentTeam.abbreviation === 'HOU'
// );
// console.log(example2);

//filter out teams
const example3 = values(data.players).filter(
    player => player.teamAsOfDate.abbreviation === 'NO'.toLowerCase()
);
console.log(example3);
