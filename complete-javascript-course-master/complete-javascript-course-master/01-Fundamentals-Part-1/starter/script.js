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
//Challenge
/*
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
//////////////////////////////////
// Type conversion
/*
const inputYear = '1986';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Dilyana'));
console.log(typeof NaN);

console.log(String(38), 38);
// Type coercion
console.log('I\'m ' + 38 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n--;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/
//////////////////////////////////
//Truthy and false values
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 10;

if (money) {
    console.log('Please don\'t spend it all');
} else {
    console.log('You should get a job');
}

let height = 0;

if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}
*/
//////////////////////////////////
//Equality operators
/*
const age = "18";

if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt('What is your favourite number?'));
console.log(favourite);

if (favourite === 9) {
    console.log('9 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 23) {
    console.log('23 is also a cool number');
} else {
    console.log('Number is not 7 or 9 or 23');
}

if (favourite !== 23) console.log('Why not 23');
*/
//////////////////////////////////
//Logical operators
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}
*/
//Challenge
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
*/
//////////////////////////////////
//Switch statement
/*
const day = 'Friday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
        break;
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}
*/
//////////////////////////////////
//Ternary operator
/*
const age = 8;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'I like to drink wine' : 'I like to drink water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
//Challenge

const bill = 275;

const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);







