"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";

// function logger() {
//   console.log("My name is Andrew");
// }

// // Calling || running || invoking the function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(10000, 4));

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1991, "Andrew"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years`;
// };

// yearsUntilRetirement(1991, "Andrew");
// yearsUntilRetirement(1970, "Mike");

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

console.log(calcAverage(1, 0, 3));

const checkWinner = function (
  firstScore1,
  firstScore2,
  firstScore3,
  secondScore1,
  secondScore2,
  secondScore3
) {
  const avgScore1 = calcAverage(firstScore1, firstScore2, firstScore3);
  const avgScore2 = calcAverage(secondScore1, secondScore2, secondScore3);

  let winner;

  if (avgScore1 > 2 * avgScore2) {
    winner = "Team 1 wins";
  } else if (2 * avgScore1 < avgScore2) {
    winner = "Team 2 wins";
  } else {
    winner = "Neither team wins";
  }
  return winner;
};

console.log(checkWinner(1, 1, 2, 1, 1, 2));
*/

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends[2]);

// const andrew = ["Andrew", "Barlow", 2037 - 2000, "Student", friends];

// console.log(andrew);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

// ARRAYS

// Add Elements
// const friends = ["Micheal", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// friends.unshift("Jon");
// console.log(friends);

// // Remove Elements
// const popped = friends.pop();
// console.log(popped);

// friends.shift();
// console.log(friends);

// // Other Methods
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// const calcTip = function (bill) {
//   const tipValue = bill <= 300 && bill >= 50 ? 0.15 : 0.2;
//   return tipValue * bill;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const andrew = {
//   firstName: "Andrew",
//   lastName: "Barlow",
//   age: 2037 - 2000,
//   job: "student",
//   friends: ["Micheal", "Peter", "Steven"],
// };

// console.log(andrew.lastName);
// console.log(andrew["lastName"]);

// const Mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const John = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(John.calcBMI());
// console.log(Mark.calcBMI());

// for loop keeps running while cond is true
// for (let rep = 1; rep <= 10; rep++) {
// console.log(`Lift rep ${rep}`);
// }

const andrewArray = ["Andrew", "Barlow", 2037 - 2000, "student"];

for (let i = 0; i < andrewArray.length; i++) {
  console.log(andrewArray[i]);
}
