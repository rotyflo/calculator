let output = document.getElementById("output");
let operators = /\+|\-|\*|\//;
let allowedKeys = [
  "Backspace",
  "Enter",
  "=",
  ".",
  "%",
  "*",
  "/",
  "+",
  "-",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];

window.onclick = event => {
  let key = event.target.value;
  process(key);
}

document.addEventListener("keydown", event => {
  let key = event.key;
  process(key);
});