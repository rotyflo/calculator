const addDecimal = (output) => {
  if (output.lastIndexOf(".") === -1) {
    return output + ".";
  }

  return output;
}

export default addDecimal;