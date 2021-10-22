import percentify from "./percentify";
import solve from "./solve";
import addDecimal from "./addDecimal";
import handleOperator from "./handleOperator";

const process = (key, output) => {
  if (!output) return "0"; // <<== hacky bug fix, address soon
    switch (key) {
      case "C":
        return "0";

      case "%":
        if (output.length > 16) return output; // keep from leaking
        return percentify(output);

      case "Enter":
      case "=":
        return solve(output);

      case ".":
        return addDecimal(output);

      case "+":
      case "*":
      case "/":
      case "-":
        return handleOperator(key, output);

      default:
        if (output.length > 16) return output; // keep from leaking
        return output === "0" ? key : output + key;
    }
}

export default process;