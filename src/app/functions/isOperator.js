const isOperator = (char) => {
	return char.search(/\+|\-|\*|\//) !== -1;
}

export default isOperator;