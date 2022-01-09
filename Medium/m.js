// Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

var day = prompt("How's your day going?");

if (day === day.toUpperCase()) {
    console.log("The user is shouting")
}
else if (day === day.toLowerCase()) {
    console.log("The user is whispering")
}
else{
    console.log("The user is talking normally")
}
