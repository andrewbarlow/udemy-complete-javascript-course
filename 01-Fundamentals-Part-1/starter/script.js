/*
let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof true);

javascriptIsFun = "yes";

console.log(javascriptIsFun);
*/
// let currentYear = 2023;
// const ageAndrew = currentYear - 2000;
// const randomTime = currentYear - 1029;
// console.log(ageAndrew);
// console.log(randomTime);

// console.log(ageAndrew * 2, ageAndrew / 2, 2 ** 3);

// const firstName = "Andrew";
// const lastName = "Barlow";
// console.log(firstName + " " + lastName);

// console.log(ageAndrew > randomTime);
// console.log(ageAndrew >= 18);

// const isFullAge = ageAndrew >= 18;

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// BMI = mass / height ** 2 = mass / (height * height)

/*
let markMass, johnMass;
let markHeight, johnHeight;
let markHigherBMI;

let markBMI, johnBMI;

// test 1

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);

// test 2

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI, markBMI, johnBMI);
*/
/*
const firstName = "Andrew";
const job = "Engineer";
const birthYear = 2000;
const year = 2023;

const andrew =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

console.log(andrew);

const andrewNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(andrewNew);

console.log(
  "string with \n\
newlines"
);

console.log(`String
Multiple
Lines`);
*/
/*
const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Andrew can start driving! 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Andrew is too young and must wait another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

// Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job.");
}

let height;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Height undefined");
}

const age = 18;
if (age === 18) console.log("You are an adult");

const favourite = Number(prompt("What is your favourite number?"));

console.log(favourite);

if (favourite == 23) {
  console.log("23 is a great number");
} else if (favourite === 7) {
  console.log("7 is a cool number");
} else {
  console.log("Number is not 7 or 23");
}

if (favourite !== 23) console.log("Why not 23");
*/

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("I can drive");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C

// console.log(hasDriversLicense && hasDriversLicense && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("I can drive");
// } else {
//   console.log("Someone else should drive...");
// }

// const averageDolphinScore = (97 + 112 + 101) / 3;
// const averageKoalaScore = (109 + 95 + 106) / 3;

// if (averageDolphinScore > averageKoalaScore && averageDolphinScore >= 100) {
//   console.log("Dolphins Win!");
// } else if (
//   averageDolphinScore < averageKoalaScore &&
//   averageKoalaScore >= 100
// ) {
// } else if (
//   averageDolphinScore === averageKoalaScore &&
//   averageDolphinScore >= 100
// ) {
//   console.log("Tie!");
// } else {
//   console.log("Everyone loses");
// }

// Switch statement

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const me = "Andrew";
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// Ternary operator example
// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine.")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";

// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const bill = 40;

// let tip;
// tip = 300 >= bill && bill >= 50 ? 0.15 * bill : 0.2 * bill;

// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
// );
