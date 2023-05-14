'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = 'NEW OUTPUT';
    }
    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = 'Andrew';
calcAge(1990);
*/

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Andrew';
// let job = 'Engineer';
// const year = 2000;

// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// // console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // console.log(this);

// var firstName = 'Matilda';

// const andrew = {
//   firstName: 'Andrew',
//   year: 1000,
//   calcAge: function () {
//     console.log(this);
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey, ${this.firstName}`),
// };

// andrew.greet();
// console.log(this.firstName);
// andrew.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 4);

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Andrew',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);

let lastName = 'Williams';
let oldLastName = lastName;

console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
