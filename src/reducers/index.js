import * as types from '../actions/types';

const defaultState = {
	output: '0',
	previous: {
		number: null,
		operator: null,
	},
	operator: ''
}

export default function calculatorReducer(state = defaultState, action) {
	let output = state.output;
	let isTooLong = output.length === 18;
	let hasDecimal = output.indexOf('.') !== -1;
	let isZero = output === '0';
	let numOfDigitsAfterDecimal = output.length - output.indexOf('.');
	let numOfDigitsToRoundTo = hasDecimal ? numOfDigitsAfterDecimal + 1 : 2;

	switch (action.type) {
		// complete
		case types.HANDLE_NUMBER:
			let nextNumber = isZero ? action.number : state.output + action.number;
			let inputIsZero = action.number === '0';

			if (state.operator !== '') {
				let previousNumber = state.output;
				let previousOperator = state.operator;

				if (state.previous.number === null) {
					return Object.assign({}, state, {
						output: action.number,
						previous: {
							number: previousNumber,
							operator: previousOperator
						},
						operator: ''
					});
				}
			}

			if (isTooLong || (isZero && inputIsZero)) return state;
			return Object.assign({}, state, { output: nextNumber });


		// complete
		case types.HANDLE_OPERATOR:
			if (state.previous.operator !== null) {
				let result = 0;
				let firstNum = Number(state.previous.number);
				let secondNum = Number(state.output);

				switch (state.previous.operator) {
					case '*':
						result = firstNum * secondNum;
						break;
					case '/':
						result = firstNum / secondNum;
						break;
					case '+':
						result = firstNum + secondNum;
						break;
					case '-':
						result = firstNum - secondNum;
						break;
					default:
						result = 'error';
				}
				result = result.toString();
				if (result.length > 18) {
					result = result.slice(0, 18);
				}
				return Object.assign({}, state, {
					output: result,
					previous: {
						number: null,
						operator: null,
					},
					operator: action.operator
				});
			}
			return Object.assign({}, state, { operator: action.operator });

		// complete
		case types.HANDLE_DECIMAL:
			if (!hasDecimal) {
				return Object.assign({}, state, { output: state.output + '.' });
			}
			return state;

		// complete
		case types.HANDLE_PERCENT:
			if (isTooLong || isZero) return state;

			return Object.assign({}, state, {
				output: (state.output / 100).toFixed(numOfDigitsToRoundTo)
			});

		case types.SOLVE:
			let result = 0;
			let firstNum = Number(state.previous.number);
			let secondNum = Number(state.output);

			switch (state.previous.operator) {
				case '*':
					result = firstNum * secondNum;
					break;
				case '/':
					result = firstNum / secondNum;
					break;
				case '+':
					result = firstNum + secondNum;
					break;
				case '-':
					result = firstNum - secondNum;
					break;
				default:
					result = 'error';
			}

			result = result.toString();
			if (result.length > 18) {
				result = result.slice(0, 18);
			}
			return Object.assign({}, state, {
				output: result,
				previous: {
					number: null,
					operator: null,
				},
				operator: action.operator
			});

		// complete
		case types.CLEAR:
			return Object.assign({}, state, defaultState);

		default:
			return state;
	}
}