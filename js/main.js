"use strict";

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

window.onclick = function(e) {
  let key = e.target.value;

  process(key);
}

document.addEventListener("keydown", function(e) {
  let key = e.key;

  process(key);
});

function process(key) {
  let display = output.innerText;

  if (allowedKeys.indexOf(key) !== -1) {
    switch (key) {
      case "Backspace":
        clear();
        break;

      case "%":
        percentify();
        break;

      case "Enter":
      case "=":
        solve();
        break;

      case ".":
        decimate();
        break;

      case "-":
        if (makeNegativeIfZero() === "break") break;

      case "+":
      case "*":
      case "/":
        if (checkForBreakage(key) === "break") break;

      default:
        output.innerText = display === "0" ? key : display + key;
    }
  }
}

function clear() {
  output.innerText = "0";
}

function percentify() {
  let current = output.innerText;
  let roundTo = current.indexOf(".") === -1 ? 2 : current.length - current.indexOf(".") + 1;

  output.innerText = (current / 100).toFixed(roundTo);
}

function solve() {
  let current = output.innerText;

  output.innerText = eval(current);

  if (current === "Infinity" || current === "-Infinity") output.innerText = "Undefined";
}

function decimate() {
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

function makeNegativeIfZero() {
  let current = output.innerText;
  if (current === "0") {
    output.innerText = "-";
    return "break";
  }
}

function checkForBreakage(key) {
  let current = output.innerText;
  let lastChar = current.slice(-1);

  if (current === "-" || current === "0") return "break";
  else if (lastChar.match(operators) || lastChar.match(/\./)) {
    output.innerText = current.slice(0, -1) + key;
    return "break";
  }
}
