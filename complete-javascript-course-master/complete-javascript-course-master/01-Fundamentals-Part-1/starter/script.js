/*
////////////////////////////////////
// Linking a JavaScript File
let js = 'amazing';
console.log(40 + 10 - 5 + 2);
////////////////////////////////////
// Values and Variables
console.log('Dilyana');
console.log(38);

let firstName = 'Dilyana';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let first_name = 'Dimana';
let $function = 27;

let person = 'Krastyo';
let PI = 3.1415;

let myFirstJob = 'Accountant';
let myCurrentJob = 'Programmer';

console.log(myFirstJob);*/

/*
////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Dimana')

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1986;
console.log(typeof year);

console.log(null);
console.log(typeof null); */

/*
////////////////////////////////////
// let, const and var
let age = 38;
age = 39;

const birthYear = 1986;

var job = 'Engineer';
job = 'Architectural';

lastName = 'Stoyanova';
console.log(lastName);*/

////////////////////////////////////
/*
// Basic Operators
// Math operators
const now = 2023;

const ageDilyana = now - 1986;
const ageDimana = now - 2021;

console.log(ageDilyana, ageDimana);

console.log(ageDilyana * 2, ageDilyana / 10, 3 ** 3);

const firstName = 'Dilyana';
const lastName = 'Stoyanova';

console.log(firstName + ' ' + lastName);
//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);
//Comparison operators
console.log(ageDilyana > ageDimana);
console.log(ageDimana >= 18);

const isFullAge = ageDimana >= 18;
console.log(now - 1986 > now - 2021);
*/
//////////////////////////////////
// Operator Precedence
/*
const now = 2023;

const ageDilyana = now - 1986;
const ageDimana = now - 2021;

console.log(now - 1986 > now - 2021);

let x, y;
x = y = 10 - 5 - 3;
console.log(x, y);

const averageAge = (ageDilyana + ageDimana) / 2;
console.log(ageDilyana, ageDimana, averageAge);
*/
//Challenge
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
*/
//////////////////////////////////
// Strings and template literal
/*
const firstName = 'Dilyana';
const job = 'accountant';
const birthYear = 1986;
const year = 2023;

const description = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(description);
const descriptionNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(descriptionNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);
*/
//////////////////////////////////
// Strings and template literal
/*
const age = 2;

const isValidAge = age >= 18;

if (isValidAge) {
    console.log('Dilyana can start driving license!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Dilyana is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2021;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/
/* Challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let output;
if (BMIMark > BMIJohn) {
    output = 'Mark\'s BMI is higher than John\'s!';
} else {
    output = 'John\'s BMI is higher than Mark\'s!';
}

console.log(output);

if (BMIMark > BMIJohn) {
    output = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
    output = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
}

console.log(output);
*/







