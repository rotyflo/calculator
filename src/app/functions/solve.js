const solve = (output) => {
  let solvedOutput = eval(output);
  if (output === "Infinity" || output === "-Infinity") solvedOutput = "Undefined";
  return solvedOutput;
}

export default solve;