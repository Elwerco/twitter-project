import React, {Component} from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from './Nav';



class Add extends React.Component{

state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://twitter-project-e5c77.firebaseio.com/0.json`)
      .then(res => {
        let persons = this.state.persons.slice()
		persons.push(res.data)    
		this.setState({persons})
        localStorage.setItem('myKey', JSON.stringify(persons));
      });

      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        localStorage.setItem('myKey', JSON.stringify(persons));
      })
  }


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
		return(
			<div>
            <Nav />
	      	  <div className="container">
		        <textarea className="form-control form1" ref={(input) => { this.trackInput = input }} />
		        <button className="btn btn-light btn1" onClick={this.addTrack.bind(this)}>Add</button>
		        <ul>
		          {this.state.persons.map(person => <li className="alert alert-info">{person.name}</li>)}
		          {this.props.testStore.map((track, index) =>
		            <li className="tweet-alert alert alert-info" key={index}>{track}</li>
		          )}
	        	</ul>
	 		  </div>
	     	</div>
		)
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
)(Add);
