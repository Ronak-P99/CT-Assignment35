// Problem 1:

let studentName;
let studentAge;
let studentGrade;
let isPresent;

studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Grade:", studentGrade);
console.log("Present:", isPresent);

// Problem 2:

let sum;
let difference;
let multi;
let quotient;
let num1 = 20;
let num2 = 5;

sum = num1 + num2;
difference = num1 - num2;
multi = num1 * num2;
quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", multi);
console.log("Quotient:", quotient);

num1 = 3;
num2 = 7;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

let isPositive = num1 && num2 >= 0;
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);


