import React from 'react';
import SimpleInput from './SimpleInput.js';

export default class BasicForm extends React.Component {
	render () {
		return (
			<div>
				Form:
				<SimpleInput handleUpdate={this.handleUpdate}/>
			</div>
		);
	}

	state = {
		inputValue: ''
	}

	handleUpdate = e => {
		const {target = {}} = e || {};
		this.setState({inputValue: target.value});
	}
}