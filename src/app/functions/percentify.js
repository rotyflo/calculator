const percentify = () => {
  let output = document.getElementById("output");
  let current = output.innerText;
  let roundTo = current.indexOf(".") === -1 ? 2 : current.length - current.indexOf(".") + 1;

  output.innerText = (current / 100).toFixed(roundTo);
}

export default percentify;