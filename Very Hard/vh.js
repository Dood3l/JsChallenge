// Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form.

var a = Number(prompt("Enter the first number"));
var operator = prompt("Which operator would you like to use? /, *, -, +");
var b  = Number(prompt("Enter the second number"));

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return  (a * b);
}

function divide(a, b) {
    return (a / b);
}

if (operator === "+") {
    add(a, b);
    alert(a + " + " + b + " = " + add(a, b));
}
else if (operator === "-") {
    subtract(a, b);
    alert(a + " - " + b + " = " + subtract(a, b));
}
else if (operator === "*") {
    multiply(a, b);
    alert(a + " * " + b + " = " + multiply(a, b));
}
else if(operator === "/") {
    divide(a, b);
    alert(a + " / " + b + " = " + divide(a, b));
}
else {
    alert("Whoops, something went wrong. Try again and make sure to follow the instructions!");
}
