import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import Routing from "./components/Router";
import Nav from './components/Nav';
import Add from "./components/Add";

class App extends Component {

  render() {
    return (
      <div>
         <Nav />
      	 {/*<Add />*/}
 		  {/*   <Routing />*/}
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
