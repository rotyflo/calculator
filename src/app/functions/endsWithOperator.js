const endsWithOperator = (string) => {
	return string.slice(-1).search(/\+|\-|\*|\//) !== -1;
}

export default endsWithOperator;