"use strict";

const buttons = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
  equals: "",
  point: "",
  del: "",
  percent: "",
  clear: ""
};
let output = document.getElementById("output");

for (let i = 0, keys = Object.keys(buttons); i < keys.length; i++) {
  let button = document.getElementById(keys[i]);
  let val = buttons[keys[i]];

  onPress(button, val);
}

function onPress(button, val) {
  button.addEventListener("click", function () {
    let operators = /\+|\-|\*|\//;
    let current = output.innerText;
    let strFromLastPoint = current.slice(current.lastIndexOf("."));
    let lastChar = current.slice(-1);

    switch (button) {
      case clear:
        output.innerText = "0";
        break;

      case del:
        output.innerText = current.length === 1 ? "0" : current.slice(0, -1);
        break;

      case percent:
        // roundTo: 2 is hundredths, 4 is millionths, etc
        let roundTo = current.indexOf(".") === -1 ? 2 : current.length - current.indexOf(".") + 1;

        output.innerText = (current / 100).toFixed(roundTo);
        //current = output.innerText;
        break;

      case equals:
        output.innerText = eval(current);

        if (current === "Infinity" || current === "-Infinity") output.innerText = "Undefined";
        break;

      case point:
        if (current.lastIndexOf(".") === -1) {
          output.innerText += lastChar.match(operators) ? "0." : ".";
        }
        else if (strFromLastPoint.match(operators)) {
          output.innerText += lastChar.match(operators) ? "0." : ".";
        }
        break;

      case subtract:
        if (current === "0") {
          output.innerText = "-";
          break;
        }
      case add:
      case multiply:
      case divide:
        if (current === "-" || current === "0") break;
        else if (lastChar.match(operators) || lastChar.match(/\./)) {
          output.innerText = current.slice(0, -1) + val;
          break;
        }

      default:
        output.innerText = current === "0" ? val : current + val;
    }
  });
}