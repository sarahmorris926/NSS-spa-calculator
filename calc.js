console.log("Welcome to the calculator app!");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calcModulo(num1, num2) {
  return num1 % num2;
}

function calculate(num1, num2, func) {
  return func(num1, num2);
}

let num1Input = document.getElementById("number");
let num2Input = document.getElementById("number2");

function printToDOM(value) {
  document.getElementById("output").innerHTML = value;
}

// Event Listeners

document.getElementById("addStuff").addEventListener("click", function() {
  // get the numbers
  // num1Input value;
  // num2Input value;
  // add the numbers and capture resulting value
  let result = calculate(+num1Input.value, +num2Input.value, add);
  // print the values
  printToDOM(result);
});

document.getElementById("subStuff").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, subtract);
  printToDOM(result);
});

document.getElementById("multStuff").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, multiply);
  printToDOM(result);
});

document.getElementById("divStuff").addEventListener("click", function() {
  let result = calculate(+num1Input.value, +num2Input.value, divide);
  printToDOM(result);
});