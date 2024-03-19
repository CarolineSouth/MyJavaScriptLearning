// let number = 10;
// if (number > 0){
//     console.log("The number is positive");

// } else if (number < 0){
//     console.log("The number is negative"); 
// } else {
//     console.log("The number is zero")
// }

//let year = 18;
// prompt('How old are you?');
// if (year <= 18){
//     alert('Your in!');
// } else {
//     alert ("Your out!")
// }

//Write a JavaScript program that checks if a given number is positive, negative, or zero.
//You need to convert the user input (which is a string) to a number using the parseInt() function
let number =parseInt(prompt ('Enter the number'));

if ( number > 0){
    alert(number +' it is positive');
} else if ( number < 0){
    alert(number + ' it is negative');
} else {
    alert(number + ' it is 0')
}

//Create a function that takes two numbers as parameters and returns the larger of the two.
let number1;
let number2;

function TwoParametrs(number1,number2){
number1 = parseInt(prompt ('Enter Number one'));
number2 = parseInt(prompt('Enter number two'));
if (number1>number2){
    alert(number1 + " is larger");
} else {
    alert(number2 + " is larger")
}
}
