// Remember, we're gonna use strict mode in all scripts now!
'use strict';
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturesNew = [3, -12, -6, -1, 30, 15, -15, 9, 5];
const calcTemperatureAmplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currTemperature = arr[i];
    if (typeof currTemperature !== 'number') continue;

    if (currTemperature > max) max = currTemperature;
    if (currTemperature < min) min = currTemperature;
  }

  return max - min;
};

const emplitude = calcTemperatureAmplitude(temperatures);

console.log(emplitude);

const calcTemperatureAmplitudeNew = function (arr1, arr2) {
  const arr = arr1.concat(arr2);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currTemperature = arr[i];
    if (typeof currTemperature !== 'number') continue;

    if (currTemperature > max) max = currTemperature;
    if (currTemperature < min) min = currTemperature;
  }

  return max - min;
};

const emplitudeNew = calcTemperatureAmplitudeNew(temperatures, temperaturesNew);

console.log(emplitudeNew);
*/
///////////////////////////////////////
// Debugging
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperaturesNew = [3, -12, -6, -1, 30, 15, -15, 9, 5];

const calcTempAmplitudeBug = function (arr1, arr2) {
  const arr = arr1.concat(arr2);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currTemperature = arr[i];
    if (typeof currTemperature !== 'number') continue;

    if (currTemperature > max) max = currTemperature;
    if (currTemperature < min) min = currTemperature;
  }

  return max - min;
};

const emplitudeBug = calcTempAmplitudeBug(temperatures, temperaturesNew);

console.log(emplitudeBug);
*/
/*
Challenge*/
const printForecast = function (arr) {
  let output = '';

  for (let i = 0; i < arr.length; i++) {
    const currForecast = `... ${arr[i]}${String.fromCodePoint(8451)} in ${
      i + 1
    } day${i !== 0 ? 's' : ''} `;

    output += currForecast;
  }
  console.log(output + ' ...');
};

printForecast([2, 21, 23, -5, 0, 4]);
