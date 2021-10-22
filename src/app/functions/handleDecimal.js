const handleDecimal = (output) => {
  return output.includes(".") ? output : output + ".";
}

export default handleDecimal;