import handlePercent from "./handlePercent";
import handleDecimal from "./handleDecimal";
import handleOperator from "./handleOperator";
import solve from "./solve";

const process = (key, output) => {  
  switch (key) {
    case "C":
      return "0";

    case "Enter":
    case "=":
      return solve(output);
  }

  if (output.length > 16) return output; // keep from leaking
  
  switch (key) {
    case "%":
      return handlePercent(output);

    case ".":
      return handleDecimal(output);

    case "+":
    case "*":
    case "/":
    case "-":
      return handleOperator(key, output);

    default:
      return output === "0" ? key : output + key;
  }
}

export default process;