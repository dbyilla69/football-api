import React, { Component } from 'react'
import './Teams.css'

// Components
import Table from '../../components/table/Table'

// Vars
let username = '8d5243ad-bd42-48dc-860b-3b58af';
let password = 'MYSPORTSFEEDS'

export default class Teams extends Component {

    constructor(props) {
        super(props)
        this.state = {
            roster: [],
            team: 'hou',
            isLoaded: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            team: event.target.value
        }, _ => {
            this.handleFetch()
        })
    }

    handleFetch() {
        this.setState({
            isLoaded: false,
        }, _ => {
            fetch(`https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json?team=${this.state.team}`, {
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ':' + password),
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                },
            })
                .then(response => {

                    console.log(response);
                    return response.json()

                })
                .then(data => {
                    console.log('ddd',data);
                    let roster = data.players.map((player, id) => {
                        return (
                            <tr key={id}>
                                <td>{player.player.jerseyNumber}</td>
                                <td>{player.player.firstName} {player.player.lastName}</td>
                                <td>{player.player.position}</td>
                                <td>{player.player.age}</td>
                                <td>{player.player.height}</td>
                                <td>{player.player.weight} lbs</td>
                            </tr>
                        )
                    })
                    this.setState({
                        roster: roster,
                        isLoaded: true,
                    })
                })
                .catch(error => {
                    console.log('Request failed: ', error)
                })
        })
    }

    componentDidMount() {
        this.handleFetch()
    }

    componentDidUpdate() {
        // console.log(this.state)
    }

    render() {
        // Configuring table
        let tableData = {
            cols: [
                ['#', '5vw'],
                ['Name', 'auto'],
                ['Position', '10vw'],
                ['Age', '10vw'],
                ['Height', '10vw'],
                ['Weight', '10vw']
            ]
        }

        return (
            <div className="page page-teams">
                <form>
                    <label>Select Team</label>
                    <select value={this.state.team} onChange={this.handleChange}>
                        <option value="ari">Arizona Cardinals</option>
                        <option value="atl">Atlanta Falcons</option>
                        <option value="bal">Baltimore Ravens</option>
                        <option value="buf">Buffalo Bills</option>
                        <option value="car">Carolina Panthers</option>
                        <option value="chi">Chicago Bears</option>
                        <option value="cin">Cincinnati Bengals</option>
                        <option value="cle">Cleveland Browns</option>
                        <option value="dal">Dallas Cowboys</option>
                        <option value="den">Denver Broncos</option>
                        <option value="det">Detroit Lions</option>
                        <option value="gb">Green Bay Packers</option>
                        <option value="hou">Houston Texans</option>
                        <option value="ind">Indianapolis Colts</option>
                        <option value="jax">Jacksonville Jaguars</option>
                        <option value="kc">Kansas City Chiefs</option>
                        <option value="lac">Los Angeles Chargers</option>
                        <option value="lar">Los Angeles Rams</option>
                        <option value="mia">Miami Dolphins</option>
                        <option value="min">Minnesota Vikings</option>
                        <option value="ne">New England Patriots</option>
                        <option value="no">New Orleans Saints</option>
                        <option value="nyg">New York Giants</option>
                        <option value="nyj">New York Jets</option>
                        <option value="oak">Oakland Raiders</option>
                        <option value="phi">Philadelphia Eagles</option>
                        <option value="pit">Pittsburgh Steelers</option>
                        <option value="sf">San Francisco 49ers</option>
                        <option value="sea">Seattle Seahawks</option>
                        <option value="tb">Tampa Bay Buccaneers</option>
                        <option value="ten">Tennessee Titans</option>
                        <option value="was">Washington Redskins</option>
                    </select>
                </form>
                <Table tableTitle="Team Roster" tableData={tableData} isLoaded={this.state.isLoaded}>{this.state.roster}</Table>
            </div>
        )
    }

}
