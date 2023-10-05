// Functions

// Q1:

// function dateTime(){
//     var mydate = new Date();
//     alert(mydate);
// }
// dateTime();

// Q2:

// var firstName = prompt("Please Enter your First Name");
// var lastName = prompt("Please Enter your Last Name");

// function fullName (a,b){
//     alert("Welcome " + a + " " + b + " to my website")
// }
// fullName(firstName,lastName);

// Q3:

// var num1 = +prompt("Please Enter First Number to Add");
// var num2 = +prompt("Please Enter Second Number to Add");

// function sum (a,b){
//     alert("Addition of two numbers is " + (a+b))
// }
// sum(num1,num2);

// Q4:
// Calculator

// var userNum1 = +prompt("Enter First number");
// var operator = prompt("Enter Operator");
// var userNum2 = +prompt("Enter Second number");

// function calculate(num1,opp,num2){
//   if (operator === "+"){
//     return num1 + num2;
//   }
//   else if (operator === "-"){
//     return num1 - num2;
//   }
//   else if (operator === "*"){
//     return num1 * num2;
//   }
//   else if (operator === "/"){
//     return num1 / num2;
//   }
// }
// alert(calculate(userNum1, operator, userNum2));

// Q5:

// var num = +prompt("Please Enter a number to square");

// function square(x){
//     alert(x*x);
// }
// square(num);

// Q6:

// var userNum = +prompt("Please Enter a number to check Factorial number");
// function factorial(num) {
//     if (num === 0) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
// var result = factorial(userNum);
// alert(result);

// Q7:

// var startNum = +prompt("Please Enter starting number of counting");
// var endNum = +prompt("Please Enter ending number of counting");

// function counting(first,sec){
//     for (i = first; i <= sec; i++){
//         document.write("<strong>" + i + "</strong> , ")
//     }
// }
// counting(startNum,endNum);

// Q8:

// function calculateHypotenuse(base,perpendicular){
//     function calculateSquare(num){
//         return num * num;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
//     return hypotenuse;
  
// }

// var base = +prompt("Enter base value measurement of the Triangle");
// var perpendicular = +prompt("Enter perpendicular value measurement of the Triangle");

// var result = calculateHypotenuse(base,perpendicular);
// alert("The hypotenuse of the triangle is: " + result);

// Q9:

// i:

// function calcArea(width,height){
//     return width*height;
// }
// alert("Area of the rectangle is " + calcArea(20,30));

// ii:

// var width = 20;
// var height = 30;

// function calcArea(a,b){
//     return a*b;
// }
// alert("width " + width + "\nheight " + height + "\nArea of the rectangle is " + calcArea(width,height));

// Q10:

// var userInput = prompt("Please Enter your word.");
// var lowercaseInput = userInput.toLowerCase();
// var palindrome = "";

// function result(){
//     for (i = lowercaseInput.length -1; i>=0; i--){
//         palindrome += lowercaseInput[i];
//     }
//     if(lowercaseInput === palindrome){
//         alert("This is a Palindrome.");
//     }else{
//         alert("Sorry!!! This is not a Palindrome!!!");
//     }
// }
// result();

// Q11:

// var userstr = prompt("Please enter a word or sentence to apply capitalization");

// function capitalization(inputStr) {
//     var words = inputStr.split(" ");
//     var resultStr = "";

//     for (var i = 0; i < words.length; i++) {
//         resultStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//         if (i < words.length - 1) {
//             resultStr += " ";
//         }
//     }
//     return resultStr;
// }

// var capitalizedStr = capitalization(userstr);
// alert("Capitalized String:\n" + capitalizedStr);

// Q12:

// function findLongestWord(inputString) {
//     var words = inputString.split(" ");
//     var longestWord = "";
//     var longestLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         var currentWord = words[i];
//         if (currentWord.length > longestLength) {
//             longestWord = currentWord;
//             longestLength = currentWord.length;
//         }
//     }
//     return longestWord;
// }
// var inputString = prompt("Enter any sentence to check the longest word");
// var longest = findLongestWord(inputString);
// alert("Longest word: " + longest);

// Q13:

// function myfunction(str, a) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === a) {
//             count++;
//         }
//     }
//     alert("The alphabet '" + a + "' occurs " + count + " times in the string.");
// }

// var inputStr = prompt("Please enter a sentence here to check the alphabet occurrence");
// var alpha = prompt("Please enter the alphabet to check the occurrence in the string");

// myfunction(inputStr, alpha);

// Q14: 
// The Geometrizer

var radius = prompt("Enter radius to calculate circle properties.");
var pie = 3.14;

function calcCircumference(formula){
    return formula = 2*pie*radius;
}

function calcArea(formula){
    return formula = pie*(radius*radius);
}
alert ("Circumference of the Circle  =  " +calcCircumference() + "\nArea of the Circle  =  " + calcArea());