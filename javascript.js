/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/
//string
const firstName = "Sravya";
const lastName = "Konda";
console.log(firstName + lastName);

//numbers
let Age = 18;
let weight = 50;
console.log(Age);

//boolean
const newCar = true;
const NewCar = false;
console.log(NewCar);

//Array
const cars = ["benz", "Tesla", "BMW"];
const Hobbies = ["playing", "watch Tv", "dancing"];
console.log(cars[2]);
console.log(Hobbies);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

let x = 5;
let Y = 6;
const add = x + Y; //Addition operator
console.log(add);
x += 2;

x++; //Increment operator
console.log(x);

const mul = x * Y; //multiplay operator
console.log(mul);
let z = 48;
z -= 5;
z--; //decrement operator
console.log(z);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 20;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "/home";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("welcome message");
} else {
  console.log("Error message"); // if we change userAge to less than 18 then we get error message
}

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false; // if userMale = true gender is Mr
const userTitle = userMale ? " Mr." : " Mrs.";
console.log("gender:", userTitle);
