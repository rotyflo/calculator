import isOperator from "./isOperator";

const solve = (output) => {
  let lastChar = output.slice(-1);

  if (isOperator(lastChar)) {
    return output;
  }
  else if (output === "Infinity" || output === "-Infinity") {
    return "Undefined";
  }
  return eval(output);
}

export default solve;