import React from "react";
import { Redirect } from 'react-router';
import {fire} from "./Fire";

class Nav extends React.Component{
	constructor(props) {
    super(props);
    this.state = {isRedirect: false};
    this.click = this.click.bind(this);
  }

	click(){
		fire.auth().signOut();
		this.setState({isRedirect: true});
		}

	render() {

		if (this.state.isRedirect) {
  			return <Redirect to='/login'/>
		}

		return(
			<header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar nav_my">
		      	<button className="btn btn-link nav-link-header" onClick={this.click}>Sign up</button>
		    </header>
		)
	}

}

export default Nav;