import isOperator from "./isOperator";

const handleOperator = (key, output) => {
  let lastChar = output.slice(-1);

  if (output.length === 1) {
    if (output === "0" && key === "-") {
      return "-";
    }
    else if (isOperator(output)) {
      return output;
    }
  }
  else if (isOperator(lastChar)) {
    return output.slice(0, -1) + key;
  }
  return output + key;
}

export default handleOperator;