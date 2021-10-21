import percentify from "./percentify";
import solve from "./solve";
import decimate from "./decimate";
import makeNegativeIfZero from "./makeNegativeIfZero";
import checkForBreakage from "./checkForBreakage";

const process = (key) => {
  let output = document.getElementById("output");
  let display = output.innerHTML;

    switch (key) {
      case "C":
        return "0";

      case "%":
        if (output.innerText.length > 16) return; // keep from leaking
        percentify();
        break;

      case "Enter":
      case "=":
        solve();
        break;

      case ".":
        decimate();
        break;

      case "-":
        if (makeNegativeIfZero() === "break") break;

      case "+":
      case "*":
      case "/":
        if (checkForBreakage(key) === "break") break;

      default:
        if (output.innerText.length > 16) return; // keep from leaking
        output.innerText = display === "0" ? key : display + key;
    }
}

export default process;