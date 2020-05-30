import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props){//to allaow acces to this.props
		super(props);
		this.state = {
			hasError : false
		}
	}
	componentDidCatch(error,info){
		this.setState({hasError : true});
	}

	render(){
			if(this.state.hasError){
				return <h1>Ooooooops, That is not good!!!</h1>
			}
			return this.props.children;
	}
}
export default ErrorBoundry;

/*
- exemple : we are usig ErrorBoundry class to catch if there is an error to display CardList
- and to chnge the state of hasError variable we use componentDidCatch(error,info) method : 
	- its like tha try catch block in js if nything errors out it will run this lifecycle hook and 
- and finally import ErrorBoundry class in App.js
- errorboundry are reallu useful when we put our app into production where we don't have detaild logs of whats error we have.
- we want our users just see our message error boundry
*/