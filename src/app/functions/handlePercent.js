const handlePercent = (output) => {
  let roundTo = output.indexOf(".") === -1 ? 2 : output.length - output.indexOf(".") + 1;

  return (output / 100).toFixed(roundTo);
}

export default handlePercent;