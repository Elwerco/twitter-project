import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      var numbers1 = JSON.parse( localStorage.getItem( 'myKey' ) );
      numbers1.push(this.trackInput.value);
      this.forceUpdate();
      localStorage.setItem('myKey', JSON.stringify(numbers1));
      this.trackInput.value = '';

  }

  render() {
    console.log(this.props.testStore);
    return (
      <div>
        <textarea className="form-control form1" ref={(input) => { this.trackInput = input }} />
        <button className="btn btn-light btn1" onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) =>
            <li className="alert alert-info" key={index}>{track}</li>
          )}
        </ul>
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
