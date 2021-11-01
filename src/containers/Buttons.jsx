import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Buttons extends React.Component {
	render() {
		return (
			<div class="buttons">
				<button id="clear" value="C" onClick={this.props.clear}>clear</button>
				<button id="percentify" value="%" onClick={this.props.handlePercent}>%</button>
				<button id="divide" value="/"
					onClick={() => this.props.handleOperator('/')}
					className={this.props.operator === '/' ? 'selected-button' : ''}>&#247;</button>

				<button id="seven" value="7" onClick={() => this.props.handleNumber('7')}>7</button>
				<button id="eight" value="8" onClick={() => this.props.handleNumber('8')}>8</button>
				<button id="nine" value="9" onClick={() => this.props.handleNumber('9')}>9</button>
				<button id="multiply" value="*" 
					onClick={() => this.props.handleOperator('*')}
					className={this.props.operator === '*' ? 'selected-button' : ''}>&#215;</button>

				<button id="four" value="4" onClick={() => this.props.handleNumber('4')}>4</button>
				<button id="five" value="5" onClick={() => this.props.handleNumber('5')}>5</button>
				<button id="six" value="6" onClick={() => this.props.handleNumber('6')}>6</button>
				<button id="subtract" value="-"
					onClick={() => this.props.handleOperator('-')}
					className={this.props.operator === '-' ? 'selected-button' : ''}>-</button>

				<button id="one" value="1" onClick={() => this.props.handleNumber('1')}>1</button>
				<button id="two" value="2" onClick={() => this.props.handleNumber('2')}>2</button>
				<button id="three" value="3" onClick={() => this.props.handleNumber('3')}>3</button>
				<button id="add" value="+"
					onClick={() => this.props.handleOperator('+')} 
					className={this.props.operator === '+' ? 'selected-button' : ''}>+</button>

				<button id="decimate" value="." onClick={this.props.handleDecimal}>.</button>
				<button id="zero" value="0" onClick={() => this.props.handleNumber('0')}>0</button>
				<button id="solve" value="=" onClick={this.props.solve}>=</button>
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
