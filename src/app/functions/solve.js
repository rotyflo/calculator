const solve = () => {
  let output = document.getElementById("output");
  let current = output.innerText;

  output.innerText = eval(current);

  if (current === "Infinity" || current === "-Infinity") output.innerText = "Undefined";
}

export default solve;