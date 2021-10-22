import percentify from "./percentify";
import solve from "./solve";
import decimate from "./decimate";
import makeNegativeIfZero from "./makeNegativeIfZero";
import checkForBreakage from "./checkForBreakage";

const process = (key, output) => {
  if (!output) return "0";
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
        decimate();
        break;

      case "-":
        if (makeNegativeIfZero() === "break") return output;

      case "+":
      case "*":
      case "/":
        if (checkForBreakage(key) === "break") return output;

      default:
        if (output.length > 16) return output; // keep from leaking
        return output === "0" ? key : output + key;
    }
}

export default process;