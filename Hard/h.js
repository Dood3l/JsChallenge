// Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

var a = 20;
var b = 19;

function add(a, b) {
    return (a + b);
}console.log(a + " + " + b + " = " + add(a, b));

function subtract(a, b) {
    return (a - b);
}console.log(a + " - " + b + " = " + subtract(a, b));

function multiply(a, b) {
    return (a * b);
}console.log(a + " * " + b + " = " + multiply(a, b));


function divide(a, b) {
    return (a / b);
}console.log(a + " / " + b + " = " + divide(a, b));