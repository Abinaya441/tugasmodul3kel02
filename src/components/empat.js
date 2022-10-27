import React, { Component } from 'react';
import Result from './result';
import "./components.css";

class App extends Component{

static defaultProps = {
	secret : Math.floor(Math.random() * 20) + 1
}

constructor(props){
	super(props)
	this.state = { term : '' }

	this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

render(){
	return (
	<div>
		<div>
		<h1 className='term'>
			Guess Number between 1 to 20
		</h1>
		</div>
		<input className='term'
		id='term'
		type='text'
		name='term'
		value={this.state.term}
		onChange={this.handleChange}
		/>

		<Result term={this.state.term}
			secretNum={this.props.secret} />
	</div>
	)
}
}
export default App
