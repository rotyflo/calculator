import handlePercent from "./handlePercent";
import solve from "./solve";
import handleDecimal from "./handleDecimal";
import handleOperator from "./handleOperator";

const process = (key, output) => {
  if (!output) return "0"; // <<== hacky bug fix, address soon
    switch (key) {
      case "C":
        return "0";

      case "%":
        if (output.length > 16) return output; // keep from leaking
        return handlePercent(output);

      case "Enter":
      case "=":
        return solve(output);

      case ".":
        return handleDecimal(output);

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