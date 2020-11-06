import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SimpleInput.css'


export default class SimpleInput extends React.PureComponent {
	render () {
		return (
			<div className='container'>
				<input 
					className='SimpleInput' 
					type='text' 
					required 
					value={this.state.inputValue} 
					onChange={this.handleInputChange}
					onBlur={this.submitUpdate}
				/> 
				
				{(!this.state.inputError && this.state.inputValue !== '') && 
					<div className='icon'><FontAwesomeIcon icon='check' color='green'/></div>
				}
				
				<label>{this.props.field}</label>
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

	submitUpdate = () => this.props.handleUpdate(this.props.field, this.state.inputValue);
}