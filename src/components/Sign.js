import React from 'react';
import Nav from "./Nav";
import { Redirect } from 'react-router';
import {fire} from "./Fire";


class Sign extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	isRedirect: false,
	    	email: "",
	    	password: "",
	    	status: ""
	    };

	    this.signup = this.signup.bind(this);


  }
	signup(){
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		fire.auth().createUserWithEmailAndPassword(email, password)
		.then(() => {alert("Succsess")}).catch(function(error) {
		  // Handle Errors here.
		  console.log(error.code);
		  console.log(error.message);
		  alert(error.message);
		  document.getElementById('password').value = [];		  
		 });
			}

	render() {

		if (this.state.isRedirect) {
  			return <Redirect to='/login'/>
		}
		
		return(
			<div>
				<Nav />
				<div className="container">
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Email address</label>
						    <input id="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
						    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputPassword1">Password</label>
						    <input id="password" type="password" className="form-control" placeholder="Password" />
						  </div>
						  <div className="form-group form-check">
						    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
						    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						  </div>
						  <button className="btn btn-primary" onClick={this.signup}>Register</button>
				</div>
			</div>
		)
	}
}

export default Sign;