const makeNegativeIfZero = () => {
  let output = document.getElementById("output");
  let current = output.innerText;
  if (current === "0") {
    output.innerText = "-";
    return "break";
  }
}

export default makeNegativeIfZero;