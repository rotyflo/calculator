const handleDecimal = (output) => {
  let operators = /\+|\-|\*|\//;
  let decimalEnding = output.slice(-1).match(operators) ? "0." : ".";
  let strFromLastPoint = output.slice(output.lastIndexOf("."));
  let operatedSinceDecimal = strFromLastPoint.match(operators);
  let notExistDecimal = output.lastIndexOf(".") === -1;

  if (notExistDecimal || operatedSinceDecimal) {
    return output + decimalEnding;
  }
  return output;
}

export default handleDecimal;