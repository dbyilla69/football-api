import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Order from '../../components/Order/Order';
//import axios from '../axios-instances/axiosURL';
import * as actions from '../actions/teams-action';

//Fecth was working but i broke something
class Teams extends Component {
  componentDidMount() {
      console.log('yyyyy', this.props.onfetchTeams());
  }

  render() {
    return <h1>This</h1>;
    // if (!this.props.loading) {
    //   orders = this.props.orders.map(order => (
    //     <Order
    //       key={order.id}
    //       ingredients={order.ingredients}
    //       price={order.price}
    //     />
    //   ));
    // }
    // return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

const mapDispatchToProps = dispatch =>
{
  return {
    onfetchTeams: () => dispatch(actions.fetchTeams())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
