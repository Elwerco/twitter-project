import React from 'react';
import Nav from "./Nav";
import { Redirect } from 'react-router';
import {fire} from "./Fire";

class Auth extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
    	isRedirect: false,
    	email: "",
    	password: "",
    	status: ""

    };

    this.signup = this.signup.bind(this);
    this._login = this._login.bind(this);
    this._logout = this._logout.bind(this);
  }
	signup(){
		this.setState({isRedirect: true});
	}

	_login(){

		fire.auth().onAuthStateChanged(firebaseUser => {
			console.log(firebaseUser);
			if (firebaseUser) {
				console.log(firebaseUser);
				console.log("Succsess");
				var btnLogout = document.getElementById('lout');
				var btnLin = document.getElementById('lin');
				btnLogout.classList.remove('hide');
				btnLin.classList.add('hide');
			} else {
				var btnLogout = document.getElementById('lout');
				var btnLin = document.getElementById('lin');
				console.log("Sorry, you are not loggined in! :(")
				btnLogout.classList.add('hide');
				btnLin.classList.remove('hide');
			}
		})

		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		fire.auth().signInWithEmailAndPassword(email, password)
		.catch(function(error) {
			  console.log(error.code);
			  console.log(error.message);
			  // alert(error.message);
			  document.getElementById('password').value = [];
		});
	}

	_logout(){
		fire.auth().signOut();
		document.getElementById('password').value = [];
	}

	render() {

		if (this.state.isRedirect) {
  			return <Redirect to='/signup'/>
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
						  <button id="lin" onClick={this._login} type="submit" className="btn btn-primary">Log In</button>
						  <button id="lout" className="btn btn-warning hide logout" onClick={this._logout}>Log Out</button>
						  <button className="btn btn-link" onClick={this.signup}>Sign up</button>
				</div>
			</div>
		)
	}
}


export default Auth;