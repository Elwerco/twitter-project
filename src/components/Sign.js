import React from 'react';
import Nav from "./Nav";
import { Route, Redirect } from 'react-router';


class Sign extends React.Component {
	constructor(props) {
    super(props);
    this.state = {isRedirect: false};
    this.signup = this.signup.bind(this);
  }

	signup(){
		this.setState({isRedirect: true});
	}

	render() {

		if (this.state.isRedirect) {
  			return <Redirect to='/login'/>
		}
		
		return(
			<div>
				<Nav />
				<div className="container">
					<form>
						  <div className="form-group">
						    <label htmlFor="exampleInputEmail1">Email address</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						  </div>
						  <div className="form-group">
						    <label htmlFor="exampleInputPassword1">Password</label>
						    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						  </div>
						  <div className="form-group form-check">
						    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
						    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						  </div>
						  <button type="submit" className="btn btn-primary">Log In</button>
						  <button className="btn btn-link" onClick={this.signup}>Sign up</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Sign;