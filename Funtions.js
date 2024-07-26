// Assignment 1:
// Task: Write a JavaScript function that takes two numbers as arguments and returns their sum.

function sumNums(a, b){
    return a+b;
}
console.log("Sum of two Number : " + sumNums(1,2))


// Assignment 2:
// Task: Write a JavaScript function that takes a string as an argument and returns the string in uppercase.
function toUpperCaseString(input) {
    return input.toUpperCase();
}

let originallString = "hello, world!";
let uppercasedString = toUpperCaseString(originallString);
console.log("String to upperCase : " + uppercasedString); 


// Assignment 3:
// Task: Write a JavaScript function that takes an array of numbers as an argument and returns the average of the numbers.


function calculateAverage(numbers) {

    if (numbers.length === 0) return 0;
    
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    let average = sum / numbers.length;
    
    return average;
}


let numArray = [10, 20, 30, 40, 50];
let average = calculateAverage(numArray);
console.log("Average Calculator : " + average); 



// Assignment 4:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all vowels removed.

function removeVowels(inputString) {
   
    let vowels = /[aeiouAEIOU]/g;
    
    
    let resultString = inputString.replace(vowels, '');
    
    return resultString;
}

let exampleString = "Hello, World!";
let stringWithoutVowels = removeVowels(exampleString);
console.log("Removed Vowels : " + stringWithoutVowels); 


// Assignment 5:
// Task: Write a JavaScript function that takes a number as an argument and returns the factorial of that number.

function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (number === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

let num = 5;
let fact = factorial(num);
console.log(`Factorial of ${num} is ${fact}`); 


// Assignment 6:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all letters reversed.

function reverseString(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    
    return reversedString;
}

let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log("Reverse String : " + reversedString); 
