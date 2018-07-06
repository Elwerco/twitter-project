import React, { Component } from 'react';
import ReactDOM from 'react-dom';


	function NumberList(props) {
	  var numbers = props.numbers;
	  var listItems = numbers.map((number) =>
	    <li className="alert alert-info" key={number.toString()}>
	      {number}
	    </li>
	  );
	  return (
	    <ul>{listItems}</ul>
	  );
	}


	var numbers = [];
	localStorage.setItem('myKey', JSON.stringify(numbers));

class Form extends Component {

		submit() {
		console.log('submit', this.testInput.value);
		var numbers1 = JSON.parse( localStorage.getItem( 'myKey' ) );
		console.log(numbers);
		numbers1.push(this.testInput.value);
		this.forceUpdate();
		localStorage.setItem('myKey', JSON.stringify(numbers1));
		console.log(numbers1);
		this.testInput.value = "";

	}

		render() {
			return (
			<div className="container">
				<textarea className="form-control form1" ref={(input) => this.testInput = input} />
				<button className="btn btn-light btn1" onClick={this.submit.bind(this)}>Submit</button>
				<NumberList numbers={JSON.parse( localStorage.getItem( 'myKey' ) )} />
			</div>
			);
		}
	}

export default Form;