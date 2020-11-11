import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as helpers from '../helpers.js';
import './SimpleInput.css'


export default class SimpleInput extends React.PureComponent {
	render () {
		const {inputError} = this.state;
		return (
			<div className='container'>
				<div className={ inputError ? 'containerWithError' : 'inputContainer'}>
					<input
						className={ this.isValid() ? 'ValidInput' : 'SimpleInput' }
						type='text'
						required
						value={this.state.inputValue}
						onChange={this.handleInputChange}
						onBlur={this.submitUpdate}
					/>

					<label>{this.props.field}</label>

					{ this.isValid() &&
						<div className='icon'>
							<FontAwesomeIcon
								icon='check'
								color={inputError ? '#D12758' : '#03A0A5'}/>
						</div>
					}
				</div>

				<div className='ErrorMessage'>{inputError}</div>
			</div>
		);
	}

	state = {
		inputValue: '',
		inputError: null
	}

	isValid = () => !this.state.inputError && (this.state.inputValue.trim() !== '' );

	handleInputChange = e => {
		const {value: inputValue} = e.target || {};
		const { type: inputType, isRequired } = this.props;
		const inputError = helpers.validateInput(inputValue, inputType, isRequired);
		this.setState({ inputValue, inputError });
	}

	submitUpdate = () => this.props.handleUpdate(this.props.field, this.state.inputValue);
}
