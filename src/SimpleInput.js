import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SimpleInput.css'


export default class SimpleInput extends React.PureComponent {
	render () {
		return (
			<div className='container'>
				<input type='text' value={this.state.inputValue} onChange={this.handleInputChange}/> 
				&nbsp;
				{(!this.state.inputError && this.state.inputValue !== '') && 
					<FontAwesomeIcon icon='check' color='green'/>
				}
			</div>
		);
	}

	state = {
		inputValue: '',
		inputError: null
	}

	handleInputChange = e => {
		const {target = {}} = e || {};
		this.setState({inputValue: target.value});
	}
}