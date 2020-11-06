import React, { Fragment, Component } from 'react';
import SimpleInput from './SimpleInput.js';
import SubmitButton from './SubmitButton.js';
import EventDate from './EventDate.js';
import './BasicForm.css';

export default class BasicForm extends Component {
	render () {
		const results = Object.values(this.state.form).filter(value => value !== undefined);
		return (
			<Fragment>
				<div className='FormContainer'>
					<SimpleInput field='email' handleUpdate={this.handleUpdate}/>
					<div className='HalfForm'>
						<SimpleInput field='firstName' handleUpdate={this.handleUpdate}/>
						<SimpleInput field='lastName' handleUpdate={this.handleUpdate}/>
					</div>
					<div className='HalfForm'>
						<EventDate handleUpdate={this.handleUpdate}/>
					</div>
					<SubmitButton onClick={this.handleSubmit}/>
				</div>
				{this.state.submitCount !== 0 && 
					<div>
						Results:
						{results.map((value, index) => <div key={index}>{value}</div>)}
					</div>
				}
			</Fragment>
		);
	}

	state = {
		form: {
			'email': '',
			'firstName': '',
			'lastName': '',
			'eventDate': ''
		},
		submitCount: 0
	}

	handleUpdate = (field, value) => {
		const form = this.state.form;
		this.setState({
			form: {
				...form,
				[field]: value
			}
		});
	}

	handleSubmit = () => {
		this.setState({submitCount: this.state.submitCount + 1});
	}
}