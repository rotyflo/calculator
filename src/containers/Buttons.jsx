import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Buttons extends React.Component {
	buttons = () => [
		{
			id: 'clear',
			action: this.props.clear,
			text: 'clear',
			class: ''
		},
		{
			id: 'percentify',
			action: this.props.handlePercent,
			text: '%',
			class: ''
		},
		{
			id: 'divide',
			action: () => this.props.handleOperator('/'),
			text: '\u00F7',
			class: this.props.operator === '/' ? 'selected-button' : ''
		},
		{
			id: 'seven',
			action: () => this.props.handleNumber('7'),
			text: '7',
			class: ''
		},
		{
			id: 'eight',
			action: () => this.props.handleNumber('8'),
			text: '8',
			class: ''
		},
		{
			id: 'nine',
			action: () => this.props.handleNumber('9'),
			text: '9',
			class: ''
		},
		{
			id: 'multiply',
			action: () => this.props.handleOperator('*'),
			text: '\xD7',
			class: this.props.operator === '*' ? 'selected-button' : ''
		},
		{
			id: 'four',
			action: () => this.props.handleNumber('4'),
			text: '4',
			class: ''
		},
		{
			id: 'five',
			action: () => this.props.handleNumber('5'),
			text: '5',
			class: ''
		},
		{
			id: 'six',
			action: () => this.props.handleNumber('6'),
			text: '6',
			class: ''
		},
		{
			id: 'subtract',
			action: () => this.props.handleOperator('-'),
			text: '-',
			class: this.props.operator === '-' ? 'selected-button' : ''
		},
		{
			id: 'one',
			action: () => this.props.handleNumber('1'),
			text: '1',
			class: ''
		},
		{
			id: 'two',
			action: () => this.props.handleNumber('2'),
			text: '2',
			class: ''
		},
		{
			id: 'three',
			action: () => this.props.handleNumber('3'),
			text: '3',
			class: ''
		},
		{
			id: 'add',
			action: () => this.props.handleOperator('+'),
			text: '+',
			class: this.props.operator === '+' ? 'selected-button' : ''
		},
		{
			id: 'zero',
			action: () => this.props.handleNumber('0'),
			text: '0',
			class: ''
		},
		{
			id: 'decimal',
			action: this.props.handleDecimal,
			text: '.',
			class: ''
		},
		{
			id: 'equals',
			action: this.props.solve,
			text: '=',
			class: ''
		},
	];

	render() {
		return (
			<div class="buttons">
				{
					this.buttons().map(btn =>
						<button id={btn.id} onClick={btn.action} className={btn.class}>
							{btn.text}
						</button>
					)
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		operator: state.operator
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleNumber: (number) => {
			dispatch(actions.handleNumber(number));
		},
		handleOperator: (operator) => {
			dispatch(actions.handleOperator(operator));
		},
		handleDecimal: () => {
			dispatch(actions.handleDecimal());
		},
		handlePercent: () => {
			dispatch(actions.handlePercent());
		},
		solve: () => {
			dispatch(actions.solve());
		},
		clear: () => {
			dispatch(actions.clear());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
