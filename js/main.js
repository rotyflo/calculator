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
  plusmin: "",
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

      case plusmin:
        output.innerText = current[0] === "-" ? current.slice(1) : "-" + current;
        break;

      // BUG: adds too many decimal places if selected in succession
      case percent:
        output.innerText = current / 100;
        current = output.innerText;
        break;

      case equals:
        if (lastChar.match(operators)) current = current.slice(0, -1);
        // BUG: keeps other letters and symbols from being evaluated, but disables negative numbers
        // current = current.replace(/^([0-9]\+|\-|\*|\/|\.)/g, "");
        output.innerText = eval(current);
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
        if (current === "0") output.innerText = val;
      case add:
      case multiply:
      case divide:
        if (current !== "0" && lastChar.match(/[0-9]/)) {
          output.innerText += val;
        }
        else if (lastChar.match(operators)) {
          output.innerText = current.slice(0, -1) + val;
        }
        break;

      case zero:
        for (let i = current.length - 1; i >= 0; i--) {
          if (current[i].match(operators)) break;
          else if (current[i].match(/[1-9]|\./)) {
            output.innerText += "0";
            break;
          }
        }
        break;

      default:
        output.innerText = current === "0" ? val : current + val;
    }
  });
}