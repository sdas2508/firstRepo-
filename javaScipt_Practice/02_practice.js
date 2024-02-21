// let a = 5;
// let b = 3;
// console.log("a+b = ", a + b);
// console.log("a-b = ", a - b);
// console.log("a*b = ", a * b);
// console.log("a/b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ^ b = ", a ** b);
// Qs1. Get user to input a number using prompt(“Enter a number:
//Check if the number is a multiple of 5 or not.

// let a = 18;
// if(a % 5 == 0){
//    console.log("Number are Divisible by 5.");
// }else{
//    console.log("Number are not Divisible By 5");
// }

/* 80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

/*let num = 80;

if(num>=80 && num<=100){
    console.log("A");
}else if(num >=70 && num <=89){
    console.log("B");
}else if(num>=60 && num<=69){
    console.log("C");
}else if(num >=50 && num<=59){
    console.log("C");
}else{
    console.log("Fail.");
}; */

let a = prompt("Enter Your First Number = ");
let o = prompt("Enter Your Operator(+,-,*,/,%) = ")
let b = prompt("Enter Your Second Number = ");

const num1 = Number(a);
const num2 = Number(b);

if(o == '+'){
    console.log("Sum of Two Number = ", num1+num2);
}else if(o == '-'){
    console.log("Subtraction of Number is = ", num1-num2);
}else if(o == '*'){
    console.log("Multiplcation of Two Number = ", num1*num2);
}else if(o == '/'){
    console.log("Division of Two Number = ", num1/num2);
}else if(o == '%'){
    console.log("Reminder of Two Number = ", num1 % num2);
}else{
    console.log("Syntax Error !!");
}