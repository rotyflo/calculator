import endsWithOperator from "./endsWithOperator";

const handleOperator = (key, output) => {
  if (output.length === 1) {
    if (output === "0" && key === "-") {
      return "-";
    }
    else if (endsWithOperator(output)) {
      return output;
    }
  }
  else if (endsWithOperator(output)) {
    return output.slice(0, -1) + key;
  }
  return output + key;
}

export default handleOperator;