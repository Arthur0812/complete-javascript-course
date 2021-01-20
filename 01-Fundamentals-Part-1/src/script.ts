let js: string = "amazing";
if (js == "amazing") {
  console.log("JavaScript is FUN!");
}

console.log(40 + 4 - 30 * 10);

let firstName: string = "Jona";
let age: number = 25;

console.log(firstName);
console.log(age);
console.log(firstName + " is " + age + " years old.");
console.log(firstName + " is a wonderful person");

let threeYears = 3 * 365 * 24 * 60 * 60 * 1000; // => number (type inferrence)

// let 4burgers = "yeah"        => syntax error
// let burger&meat = "wow"      => syntax error

// variables can only contain numbers, letters (not in first place though), and "_" or "$"

// variables can't be equal to built-in keywords

// let new = "dog"

let $function = 30;

console.warn($function);

// constants are conventionally written in all UPPERCASE

const PI = 3.14159;

console.error(PI);

// write DESCRIPTIVE and CONCISE variables names

// bad
let job1 = "UX Designer";
let job2 = "Teacher";

// good
let firstJob = "UX Designer";
let currentJob = "Teacher";

let javascriptIsFun: string;

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "FUN!!!";

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(typeof null);

// Math operators
let now = new Date().getFullYear();
const ageJonas = now - 1990;
const ageMarie = now - 1995;
console.log(ageJonas, ageMarie);
console.log(2 ** 10);

let x = 10 + 4;
x += 2;
x *= 40;
x--;
console.log(x);

const fullAgeGermany = 18;
let isMarieFullAge = ageMarie >= fullAgeGermany;
console.log(`Marie is ${!isMarieFullAge ? "not " : ""}full age.`);

// Operator Precedence
let y, z;
y = z = 25 - (10 + 5);
console.log(y, z);

const averageAge = (ageJonas + ageMarie) / 2;
console.warn(averageAge);

// Strings and Template Literals
firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

let jonas =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + ".";

console.log(jonas);

jonas = `I'm ${firstName}, a ${now - birthYear} years old ${job}.`;

console.log(jonas);

// if / else statements
const licenseAge = 18;
interface Person {
  name: string;
  birthYear: number;
  century: number;
}

const sophia = {
  name: "Sophia",
  birthYear: 1989,
  century: 0,
};
const jacob = {
  name: "Jacob",
  birthYear: 2007,
  century: 0,
};
const marie = {
  name: "Marie",
  birthYear: 2005,
  century: 0,
};

let persons: Person[] = [sophia, jacob, marie];

function canGetLicense(p: Person): boolean {
  return now - p.birthYear >= licenseAge;
}

persons.forEach((p) => {
  if (p.birthYear < 2000) {
    p.century = 20;
  } else {
    p.century = 21;
  }

  if (canGetLicense(p)) {
    console.log(`${p.name} is allowed to drive a car.`);
  } else {
    console.log(
      `${p.name} is not allowed to drive a car. (Wait ${
        licenseAge - (now - p.birthYear)
      } more years)`
    );
  }
});

if (true) {
  // will always be executed
} else {
  // will be skipped
}
// code will continue from here

// Type Conversion and Coercion
const inputYear = "1990";

// type conversion
console.log(Number(inputYear) + 18); // 2008
console.log(Number("Jonas")); // NaN
console.log(String(90)); // "90"
console.log(String(true)); // "true"

// type coercion
console.log("I am " + 23 + " years old.");
// behind the scenes:
console.log("I am " + String(23) + " years old.");
// string concatenation
console.log(4 + "23"); //

// arithmetic operators (-, *, /, %, ** etc.) are not allowed for non-number operands:
// console.log("45" - 9) => error

console.log("30" > "20"); // true
// string comparison (compares unicode code points of each string character)
console.log("a" > "b"); // false, because the letter "b" comes after "a" in unicode and hence has a greater code point

// Truthy and Falsy Values
// truthy or falsy values are not excatly true or false, but will become true or false when we try to convert them into booleans

// Falsy values are: 0, "", undefined, null and NaN
let falsy = undefined;

// Any other values will are truthy, so they will become true when trying to convert them into booleans
let truthy = "hello";

console.log(Boolean(falsy), Boolean(truthy)); // false true

// type coercion from "undefined" to "boolean"
if (falsy) {
  // code will not be executed, as "undefined" is a falsy values and (when converted to a boolean) will be converted to false
  console.log("I will not be run!");
} else {
  console.log("But I will run!");
}

// the same as this
if (Boolean(falsy)) {
  // code will not be executed, as "undefined" is a falsy values and (when converted to a boolean) will be converted to false
  console.log("I won't run either!");
} else {
  console.log("Nevertheless I will still run!");
}

console.log(Boolean("")); // empty string
console.log(Boolean(0)); // 0
console.log(Boolean("Jonas")); // non-empty string
console.log(Boolean({})); // empty object
console.log(Boolean([])); // empty array

let money = 100;
if (money) {
  console.log("I'm rich!");
} else {
  console.warn("I will have to save for a little bit longer...");
}

let height: number;
if (height) {
  console.log("Yaay, height is defined");
} else {
  console.error("height is not defined");
}

// Logical Operators and Boolean Logic
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true

console.log(!hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense && !hasGoodVision); // false
console.log(!hasDriversLicense && !hasGoodVision); // false
console.log(!hasDriversLicense || hasGoodVision); // true
console.log(hasDriversLicense || !hasGoodVision); // true
console.log(!hasDriversLicense || !hasGoodVision); // false

const canDrive = hasDriversLicense && hasGoodVision;

if (canDrive && !isTired) {
  console.log("Sarah is able to drive.");
} else if (canDrive) {
  console.log("Sarah should watch out.");
} else {
  console.log("Sarah should watch out.");
}

// Switch Statements
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let day: number = Weekday.Friday;

switch (day) {
  case Weekday.Monday:
    console.log("Plan course");
    console.log("Go to meeting");
    break;
  case Weekday.Tuesday:
    console.log("Prepare theoretical vidoes");
    break;
  case Weekday.Wednesday:
  case Weekday.Thursday:
    console.log("Prepare practical vidoes");
    break;
  case Weekday.Friday:
    console.log("Record videos");
    break;
  case Weekday.Saturday:
  case Weekday.Sunday:
    console.log("Enjoy the weekend :)");
    break;
  default:
    console.log("Not a valid day");
}

// exactly the same as

if (day === Weekday.Monday) {
  console.log("Plan course");
  console.log("Go to meeting");
} else if (day === Weekday.Tuesday) {
  console.log("Prepare theoretical vidoes");
} else if (day === Weekday.Wednesday || day === Weekday.Thursday) {
  console.log("Prepare practical vidoes");
} else if (day === Weekday.Friday) {
  console.log("Record videos");
} else if (day === Weekday.Sunday || day === Weekday.Saturday) {
  console.log("Enjoy the weekend :)");
} else {
  console.log("Not a valid day");
}

// Expressions vs Statements
// expression
44;
// statement, but "45s233ead33fs3ee2" is an expression
const id = "45s233ead33fs3ee2";

// statement
if (id === "45s233ead33fs3ee2") {
  console.log("hexadecimal ID");
} else {
  console.error("unknown ID");
}

console.log(
  `Hello ${
    // only accepts expression
    // if (id == "fsd689sd02a") => Error
    44
  }!`
);

// Ternary Operator
// one of the few operators that have 3 operands
let a = 34;

a > 10 ? console.log("a is greater than 10!") : console.log("a is not so big.");

// more common use case of ternary Operator
console.log(`${a > 10 ? "a is greater than 10!" : "a is not so big"}`);
