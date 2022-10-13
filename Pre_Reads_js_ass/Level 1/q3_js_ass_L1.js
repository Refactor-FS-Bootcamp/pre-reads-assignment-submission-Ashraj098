// javaScript Program to Find the Largest Among Three Numbers.

const num1 = 5;
const num2 = 24;
const num3 = 41;

let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);