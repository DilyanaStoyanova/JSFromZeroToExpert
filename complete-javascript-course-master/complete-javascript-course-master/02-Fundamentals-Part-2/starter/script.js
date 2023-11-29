"use strict";
//////////////////////////////////
//Function declaration, function expression, arrow function
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Dilyana");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1986);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1986);

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1986);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1986, "Dilyana"));
console.log(yearsUntilRetirement(2021, "Dimana"));
*/
//////////////////////////////////
//Functions calling other functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
//////////////////////////////////
//Reviewing functions
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1986, "Dilyana"));
console.log(yearsUntilRetirement(2021, "Dimana"));
*/
//Challenge
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
*/
//////////////////////////////////
//Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1986, 2021, 2023);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Dilyana";
const dilyana = [firstName, "Stoyanova", 2023 - 1986, "programmer", friends];

console.log(dilyana);
console.log(dilyana.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1986, 2023, 2000];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
//////////////////////////////////
//Array methods
/*
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Maria");
console.log(friends);
console.log(newLength);

friends.unshift("Bob");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Maria"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Maria"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
//Challenge
/*
function calcTip(bill) {
  const tip = bill * (bill > 50 && bill < 300 ? 0.15 : 0.2);
  return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
*/
//////////////////////////////////
//Object
/*
const dilyanaArray = [
  "Dilyana",
  "Stoyanova",
  2037 - 1986,
  "programmer",
  ["Maria", "Bob", "Roger"],
];

const dilyana = {
  firstname: "Dilyana",
  lastName: "Stoyanova",
  age: 2037 - 1986,
  job: "programmer",
  friends: ["Maria", "Bob", "Roger"],
};
*/
//////////////////////////////////
//Dot vs bracket notation
/*
const dilyana = {
  firstName: "Dilyana",
  lastName: "Stoyanova",
  age: 2037 - 1986,
  job: "programmer",
  friends: ["Maria", "Bob", "Roger"],
};

console.log(dilyana.lastName);
console.log(dilyana["lastName"]);

const nameKey = "Name";

console.log(dilyana["first" + nameKey]);
console.log(dilyana["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Dilyana? Choose between firstName, lastName, age, job, friends"
);

if (dilyana[interestedIn]) {
  console.log(dilyana[interestedIn]);
} else {
  console.log(
    "Wrong request!Choose between firstName, lastName, age, job, friends"
  );
}

dilyana.location = "Bulgaria";
dilyana["twitter"] = "@dilyana";
console.log(dilyana);

console.log(
  `${dilyana.firstName} has ${dilyana.friends.length} friends, and her best friend is called ${dilyana.friends[0]}`
);
*/
//////////////////////////////////
//Object methods
/*
const dilyana = {
  firstName: "Dilyana",
  lastName: "Stoyanova",
  birthYear: 1986,
  job: "programmer",
  friends: ["Maria", "Bob", "Roger"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(dilyana.calcAge());

console.log(dilyana.age);
console.log(dilyana.age);
console.log(dilyana.age);

console.log(dilyana.getSummary());
*/
//Challenge
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
}
*/
//////////////////////////////////
//For loop
/*
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}
*/
//////////////////////////////////
//Looping arrays, continue, break
/*
const dilyanaArray = [
  "Dilyana",
  "Stoyanova",
  2037 - 1986,
  "programmer",
  ["Maria", "Bob", "Roger"],
  true,
];
const types = [];
for (let i = 0; i < dilyanaArray.length; i++) {
  console.log(dilyanaArray[i], typeof dilyanaArray[i]);
  // types[i] = typeof dilyanaArray[i];
  types.push(typeof dilyanaArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

console.log("---ONLY STRINGS---");
for (let i = 0; i < dilyanaArray.length; i++) {
  if (typeof dilyanaArray[i] !== "string") continue;
  console.log(dilyanaArray[i], typeof dilyanaArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < dilyanaArray.length; i++) {
  if (typeof dilyanaArray[i] === "number") break;

  console.log(dilyanaArray[i], typeof dilyanaArray[i]);
}
*/
//////////////////////////////////
//Looping backwards, loops in loops
/*
const dilyanaArray = [
  "Dilyana",
  "Stoyanova",
  2037 - 1986,
  "programmer",
  ["Maria", "Bob", "Roger"],
  true,
];

for (let i = dilyanaArray.length - 1; i >= 0; i--) {
  console.log(i, dilyanaArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);

  for (let repetition = 1; repetition <= 5; repetition++) {
    console.log(
      `Exercise ${exercise}: Lifting weight repetition ${repetition}`
    );
  }
}
*/
//////////////////////////////////
//While loop
/*
let i = 1;
while (i <= 10) {
  console.log(`While: Lifting weights repetition ${i}`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("You are about to end...");
}
*/
//Challenge
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(calcAverage(totals));
*/
