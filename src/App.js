import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        localStorage.setItem('myKey', JSON.stringify(persons));
        alert("sdf");
      })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(App);
