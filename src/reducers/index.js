import * as types from '../actions/types';

const defaultState = {
	output: '0',
	previous: {
		number: null,
		operator: null,
	},
	operator: '',
	minusUsedAfterOperator: false
}

export default function calculatorReducer(state = defaultState, action) {
	let output = state.output;
	let isTooLong = output.length === 18;
	let hasDecimal = output.indexOf('.') !== -1;
	let isZero = output === '0';
	let numOfDigitsAfterDecimal = output.length - output.indexOf('.');
	let numOfDigitsToRoundTo = hasDecimal ? numOfDigitsAfterDecimal + 1 : 2;
	let isOperating = state.operator !== '';
	let isNegative = state.output[0] === '-';
	let hasOperated = state.previous.operator !== null;

	switch (action.type) {
		case types.HANDLE_NUMBER:
			let nextNumber = isZero ? action.number : state.output + action.number;
			let inputIsZero = action.number === '0';

			if (isOperating) {
				return Object.assign({}, state, {
					output: action.number,
					operator: ''
				});
			}

			if (isTooLong || (isZero && inputIsZero)) return state;
			
			return Object.assign({}, state, { output: nextNumber });

		case types.HANDLE_OPERATOR:
			let inputIsMinus = action.operator === '-';

			console.log(state.previous.number + ' ' + state.previous.operator + ' ' + state.output);

			if (isOperating) {
				if (inputIsMinus) {
					if (isNegative) {
						return Object.assign({}, state, { output: output.slice(1), minusUsedAfterOperator: false });
					}
					else {
						return Object.assign({}, state, { output: '-', minusUsedAfterOperator: true });
					}
				}
				else if (state.minusUsedAfterOperator) {
					return Object.assign({}, state, {
						output: '',
						previous: {
							number: state.previous.number,
							operator: action.operator
						},
						operator: action.operator,
						minusUsedAfterOperator: false
					});
				}
			}
			else if (hasOperated) {
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
				let resultIsTooLong = result.length > 18;

				if (resultIsTooLong) result = result.slice(0, 18);

				return Object.assign({}, state, {
					output: result,
					previous: {
						number: result,
						operator: action.operator,
					},
					operator: action.operator
				});
			}
			return Object.assign({}, state, {
				previous: {
					number: state.output,
					operator: action.operator,
				},
				operator: action.operator
			});

		case types.HANDLE_DECIMAL:
			if (!hasDecimal) {
				return Object.assign({}, state, { output: state.output + '.' });
			}
			return state;

		case types.HANDLE_PERCENT:
			if (isTooLong || isZero) return state;

			return Object.assign({}, state, {
				output: (state.output / 100).toFixed(numOfDigitsToRoundTo)
			});

		case types.SOLVE:
			let result = 0;
			let firstNum = Number(state.previous.number);
			let secondNum = Number(state.output);

			console.log(state.previous.number + ' ' + state.previous.operator + ' ' + state.output);

			if (state.previous.number === null || state.previous.operator === null) {
				return state;
			}

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
				operator: ''
			});

		case types.CLEAR:
			return Object.assign({}, state, defaultState);

		default:
			return state;
	}
}