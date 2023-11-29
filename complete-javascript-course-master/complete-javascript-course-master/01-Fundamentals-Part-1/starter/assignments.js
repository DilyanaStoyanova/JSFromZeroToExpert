/*
//Values and Variables
let country = 'Bulgaria';
let continent = 'Europe';
let population = 8000000;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
//Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); 
*/
/*
//let, const, var
const country = 'Bulgaria';
const continent = 'Europe';
const isIsland = false;
const language = 'Bulgarian';
*/
/*
Basic operators
let population = 8000000;
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);
const country = 'Bulgaria';
const continent = 'Europe';
const language = 'Bulgarian';
const description = country + ' is in ' + continent + ', and its ' + population / 1000000 + ' million people speak ' + language;
console.log(description);*/
/* 
String and template literals
const population = 8000000;
const country = 'Bulgaria';
const continent = 'Europe';
const language = 'Bulgarian';
const description = `${country} is in ${continent}, and its ${population / 1000000} million people speak ${language}`;
console.log(description);
*/
/* If else statements
const population = 8000000;
const country = 'Bulgaria';
if (population > 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    const diff = 33000000 - population;
    console.log(`${country}'s population is ${diff / 1000000} million below average`);
}
*/
/*
Type conversion and coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/
/*
Equality operators
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders');
}
*/
/*
Logical operator
const country = "Bulgaria";
const language = "Bulgarian";
const population = 8000000;
const isIsland = false;

if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
*/
/*
The switch statement
const language = "Bulgarian";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language'");
    break;
  default:
    console.log("Great language too");
    break;
}
*/
/*
Ternary operator
const country = "Bulgaria";
const population = 8000000;

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);
*/
/*
Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
}

const descBulgaria = describeCountry("Bulgaria", 8, "Sofia");
const descItaly = describeCountry("Italy", 50, "Rome");
const descCanada = describeCountry("Canada", 100, "Montreal");

console.log(descBulgaria);
console.log(descItaly);
console.log(descCanada);
*/
/*
Function declaration vs expressions
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const descBulgaria = percentageOfWorld1(8);
const descItaly = percentageOfWorld1(50);
const descCanada = percentageOfWorld1(100);

console.log(descBulgaria);
console.log(descItaly);
console.log(descCanada);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const descBulgaria2 = percentageOfWorld2(8);
const descItaly2 = percentageOfWorld2(50);
const descCanada2 = percentageOfWorld2(100);

console.log(descBulgaria2);
console.log(descItaly2);
console.log(descCanada2);
*/
/*
Arrow functions
const worldPopulation = 7900;
const percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
};

const descBulgaria3 = percentageOfWorld3(8);
const descItaly3 = percentageOfWorld3(50);
const descCanada3 = percentageOfWorld3(100);

console.log(descBulgaria3);
console.log(descItaly3);
console.log(descCanada3);
*/
/*
Functions calling other functions
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people,
  which is about ${percentage}% of the world.`;
}

const descBulgaria = describePopulation("Bulgaria", 8);
const descItaly = describePopulation("Italy", 50);
const descCanada = describePopulation("Canada", 100);

console.log(descBulgaria);
console.log(descItaly);
console.log(descCanada);
*/
/*
Arrays
const worldPopulation = 7900;

const populations = [15, 20, 5, 6];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
*/
/*
Array methods
const neighbours = ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"];

neighbours.push("Utopia");

neighbours.pop();
if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country");

neighbours[neighbours.indexOf("Turkey")] = "Republic of Sweden";
*/
/*
Objects
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "Bulgarian",
  population: 8,
  neighbours: ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],
};
*/
/*
Dot vs bracket notation
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "Bulgarian",
  population: 8,
  neighbours: ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry["population"] -= 2;
*/
/*
Object methods
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "Bulgarian",
  population: 8,
  neighbours: ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}.`);
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
*/
/*
For loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/
/*
Looping arrays, continue, break
const populations = [15, 20, 5, 6];
const percentage2 = [];

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages, percentage2);
*/
/*
Looping backwards, loops in loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/
/*
While loop
const populations = [15, 20, 5, 6];
const percentage3 = [];

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

let i = 0;

while (i < populations.length) {
  percentage3.push(percentageOfWorld1(populations[i]));
  i++;
}
*/
