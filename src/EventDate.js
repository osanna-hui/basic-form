import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

export default class EventDate extends Component {
	render () {
		return (
			<div>
				<SingleDatePicker 
					date={this.state.date}
					onDateChange={this.handleDateChange}
 					focused={this.state.focused} 
					onFocusChange={({ focused }) => this.setState({ focused })} 
  					id='eventDatePicker'
				/>
			</div>
		);
	}

	state = {
		date: null,
		focused: false
	}

	handleDateChange = date => {
		if (date.isValid()) {
			this.props.handleUpdate(this.props.field, date.format('MM/DD/YYYY'))
		}
		this.setState({ date });
	}
}