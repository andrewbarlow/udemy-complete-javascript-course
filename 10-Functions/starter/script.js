'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 3);
/*
const flight = 'LH234';
const andrew = {
  name: 'Andrew Barlow',
  passport: 12345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12345) {
    // alert('Check in');
    console.log('Check in');
  } else {
    // alert('Wrong passport');
    console.log('Wrong passport');
  }
};

checkIn(flight, andrew);
console.log(flight);
console.log(andrew);

// Is the same as doing...
const flightNum = flight;
const passenger = andrew;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(andrew);
console.log(andrew);
checkIn(flight, andrew);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('wave');
};

document.body.addEventListener('click', high5);

['Andrew', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');

greetHey('Andrew');
greetHey('Steven');

greet('Hello')('Andrew');

const greet2 = greeting => {
  return name => {
    console.log(`${greeting} number 2 ${name}`);
  };
};

const greet2Hey = greet2('Hey');
greet2Hey('Mike');
*/

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Andrew');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Doesnt work
// // book(23, 'Andrew Barlow');

// book.call(eurowings, 23, 'Andrew Barlow');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Andrew Barlow');

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Andrew');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// // Bind method
// // book.call(eurowings, 23, 'Andrew Barlow')

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Andrew Barlow');
// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Stella');

// // With Event Listeners
// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addRate = taxRate => {
//   return price => {
//     return taxRate * price + price;
//   };
// };

// console.log(addRate(0.13)(100));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const optionString = poll.options.join('\n');
  const promptArr = [poll.question, optionString, '(Write option number)'];
  const promptString = promptArr.join('\n');

  const pollAnswer = Number(prompt(promptString));

  typeof pollAnswer === 'number' &&
    pollAnswer < poll.answers.length &&
    poll.answers[pollAnswer]++;

  poll.displayResults('string');
};

poll.displayResults = function (type) {
  if (type.toLowerCase() === 'array') {
    console.log(poll.answers);
  } else if (type.toLowerCase() === 'string') {
    console.log('Poll results are ' + poll.answers.join(', '));
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer);
