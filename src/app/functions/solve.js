import endsWithOperator from "./endsWithOperator";

const solve = (output) => {
  if (endsWithOperator(output)) {
    return output;
  }
  else if (output === "Infinity" || output === "-Infinity") {
    return "Undefined";
  }
  return eval(output).toString();
}

export default solve;