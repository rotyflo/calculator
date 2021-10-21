const checkForBreakage = (key) => {
  let output = document.getElementById("output");
  let current = output.innerText;
  let lastChar = current.slice(-1);
  let operators = /\+|\-|\*|\//;

  if (current === "-" || current === "0") return "break";
  else if (lastChar.match(operators) || lastChar.match(/\./)) {
    output.innerText = current.slice(0, -1) + key;
    return "break";
  }
}

export default checkForBreakage;