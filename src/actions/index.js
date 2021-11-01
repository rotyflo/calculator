import * as types from './types';

export function handleNumber(number) {
	return {
		type: types.HANDLE_NUMBER,
		number
	};
}

export function handleOperator(operator) {
	return {
		type: types.HANDLE_OPERATOR,
		operator
	};
}

export function handleDecimal() {
	return {
		type: types.HANDLE_DECIMAL
	};
}

export function handlePercent() {
	return {
		type: types.HANDLE_PERCENT
	};
}

export function solve() {
	return {
		type: types.SOLVE
	};
}

export function clear() {
	return {
		type: types.CLEAR
	};
}