import React, { Fragment, Component } from 'react';
import SimpleInput from './SimpleInput.js';
import SubmitButton from './SubmitButton.js';
import {inputTypes} from '../helpers.js';
import './BasicForm.css';

export default class BasicForm extends Component {
	render () {
		const results = Object.values(this.state.form).filter(value => value !== undefined);
		return (
			<Fragment>
				<div className='FormContainer'>
					<SimpleInput
						field='email'
						type={inputTypes.EMAIL}
						isRequired={true}
						handleUpdate={this.handleUpdate}/>

					<div className='HalfForm'>
						<SimpleInput
							field='firstName'
							type={inputTypes.TEXT}
							isRequired={true}
							handleUpdate={this.handleUpdate}/>
						<SimpleInput
							field='lastName'
							type={inputTypes.TEXT}
							isRequired={true}
							handleUpdate={this.handleUpdate}/>
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
