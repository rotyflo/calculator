const decimate = () => {
  let operators = /\+|\-|\*|\//;
  let output = document.getElementById("output");
  let current = output.innerText;
  let lastChar = current.slice(-1);
  let strFromLastPoint = current.slice(current.lastIndexOf("."));

  if (current.lastIndexOf(".") === -1) {
    output.innerText += lastChar.match(operators) ? "0." : ".";
  }
  else if (strFromLastPoint.match(operators)) {
    output.innerText += lastChar.match(operators) ? "0." : ".";
  }
}

export default decimate;