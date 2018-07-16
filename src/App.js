import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
         {/*<Nav />*/}
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
