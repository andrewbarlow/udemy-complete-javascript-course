// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(190));

// const temperatures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (tempArr1, tempArr2) {
//   const temps = tempArr1.concat(tempArr2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures, [-99, 1]));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees celsius:'),
//   };

//   console.log(measurement);
//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitude = function (tempArr1, tempArr2) {
//   const temps = tempArr1.concat(tempArr2);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures, [1, 1]));

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let outputString = '...';
  for (let i = 0; i < temps.length; i++) {
    outputString = outputString + ` ${temps[i]} in ${i + 1} days ...`;
  }
  console.log(outputString);
};

printForecast(temps1);
printForecast(temps2);
