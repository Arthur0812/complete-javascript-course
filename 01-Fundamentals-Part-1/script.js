// PRACTICE ASSIGNMENTS
// Values and Variables
// 1.
var continent = "Europe", country = "Germany";
var population = 81;
// 2.
console.log(continent + ": " + country + ": " + population);
// Data Types
// 1.
var isIsland = false;
var language;
// 2.
console.log(typeof isIsland, typeof population, typeof country, typeof language);
// let, const, var
// 1.
language = "German";
// 2. => look above
// 3.
// isIsland = true;
// Basic Operators
// 1.
var halfPopulation = population / 2;
// 2.
population++;
console.log(population);
// 3.
var populationFinnland = 6;
var moreThanFinnland = population > populationFinnland;
console.log("greater population than finnland?", moreThanFinnland);
// 4.
var populationAverage = 33;
var moreThanAverage = population > populationAverage;
console.log("greater population than average country?", moreThanAverage);
// 5.
var description = country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people can all speak " +
    language;
console.log(description);
// Strings and Template Literals
// 1.
description = country + " is in " + continent + ", and its " + population + " million people can all speak " + language + ".";
console.log(description);
// if / else statements
// 1.
if (population > populationAverage) {
    console.log(country + "'s population is above average.");
}
else {
    console.log(country + "'s population is " + (populationAverage - population) + " million below average.");
}
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var me = new UserAccount("Arthur", 0);
function printUser(u) {
    console.log(u.name + "'s name: " + u.name);
    console.log(u.name + "'s id: " + u.id);
}
printUser(me);
console.log("length:", getLength("string"));
console.log("length:", getLength(["now", "not", "nothin'"]));
// type unions
function getLength(obj) {
    return obj.length;
}
var js = "amazing";
if (js == "amazing") {
    console.log("JavaScript is FUN!");
}
console.log(40 + 4 - 30 * 10);
var firstName = "Jona";
var age = 25;
console.log(firstName);
console.log(age);
console.log(firstName + " is " + age + " years old.");
console.log(firstName + " is a wonderful person");
var threeYears = 3 * 365 * 24 * 60 * 60 * 1000; // => number (type inferrence)
// let 4burgers = "yeah"        => syntax error
// let burger&meat = "wow"      => syntax error
// variables can only contain numbers, letters (not in first place though), and "_" or "$"
// variables can't be equal to built-in keywords
// let new = "dog"
var $function = 30;
console.warn($function);
// constants are conventionally written in all UPPERCASE
var PI = 3.14159;
console.error(PI);
// write DESCRIPTIVE and CONCISE variables names
// bad
var job1 = "UX Designer";
var job2 = "Teacher";
// good
var firstJob = "UX Designer";
var currentJob = "Teacher";
var javascriptIsFun;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = "FUN!!!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof null);
// Math operators
var now = new Date().getFullYear();
var ageJonas = now - 1990;
var ageMarie = now - 1995;
console.log(ageJonas, ageMarie);
console.log(Math.pow(2, 10));
var x = 10 + 4;
x += 2;
x *= 40;
x--;
console.log(x);
var fullAgeGermany = 18;
var isMarieFullAge = ageMarie >= fullAgeGermany;
console.log("Marie is " + (!isMarieFullAge ? "not " : "") + "full age.");
// Operator Precedence
var y, z;
y = z = 25 - (10 + 5);
console.log(y, z);
var averageAge = (ageJonas + ageMarie) / 2;
console.warn(averageAge);
// Strings and Template Literals
firstName = "Jonas";
var job = "teacher";
var birthYear = 1991;
var jonas = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + ".";
console.log(jonas);
jonas = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + ".";
console.log(jonas);
// if / else statements
var licenseAge = 18;
var sophia = {
    name: "Sophia",
    birthYear: 1989,
    century: 0
};
var jacob = {
    name: "Jacob",
    birthYear: 2007,
    century: 0
};
var marie = {
    name: "Marie",
    birthYear: 2005,
    century: 0
};
var persons = [sophia, jacob, marie];
function canGetLicense(p) {
    return now - p.birthYear >= licenseAge;
}
persons.forEach(function (p) {
    if (p.birthYear < 2000) {
        p.century = 20;
    }
    else {
        p.century = 21;
    }
    if (canGetLicense(p)) {
        console.log(p.name + " is allowed to drive a car.");
    }
    else {
        console.log(p.name + " is not allowed to drive a car. (Wait " + (licenseAge - (now - p.birthYear)) + " more years)");
    }
});
if (true) {
    // will always be executed
}
else {
    // will be skipped
}
// code will continue from here
// Type Conversion and Coercion
var inputYear = "1990";
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
var falsy = undefined;
// Any other values will are truthy, so they will become true when trying to convert them into booleans
var truthy = "hello";
console.log(Boolean(falsy), Boolean(truthy)); // false true
// type coercion from "undefined" to "boolean"
if (falsy) {
    // code will not be executed, as "undefined" is a falsy values and (when converted to a boolean) will be converted to false
    console.log("I will not be run!");
}
else {
    console.log("But I will run!");
}
// the same as this
if (Boolean(falsy)) {
    // code will not be executed, as "undefined" is a falsy values and (when converted to a boolean) will be converted to false
    console.log("I won't run either!");
}
else {
    console.log("Nevertheless I will still run!");
}
console.log(Boolean("")); // empty string
console.log(Boolean(0)); // 0
console.log(Boolean("Jonas")); // non-empty string
console.log(Boolean({})); // empty object
console.log(Boolean([])); // empty array
var money = 100;
if (money) {
    console.log("I'm rich!");
}
else {
    console.warn("I will have to save for a little bit longer...");
}
var height;
if (height) {
    console.log("Yaay, height is defined");
}
else {
    console.error("height is not defined");
}
// Logical Operators and Boolean Logic
var hasDriversLicense = true;
var hasGoodVision = true;
var isTired = true;
console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense && !hasGoodVision); // false
console.log(!hasDriversLicense && !hasGoodVision); // false
console.log(!hasDriversLicense || hasGoodVision); // true
console.log(hasDriversLicense || !hasGoodVision); // true
console.log(!hasDriversLicense || !hasGoodVision); // false
var canDrive = hasDriversLicense && hasGoodVision;
if (canDrive && !isTired) {
    console.log("Sarah is able to drive.");
}
else if (canDrive) {
    console.log("Sarah should watch out.");
}
else {
    console.log("Sarah should watch out.");
}
// Switch Statements
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
var day = Weekday.Friday;
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
}
else if (day === Weekday.Tuesday) {
    console.log("Prepare theoretical vidoes");
}
else if (day === Weekday.Wednesday || day === Weekday.Thursday) {
    console.log("Prepare practical vidoes");
}
else if (day === Weekday.Friday) {
    console.log("Record videos");
}
else if (day === Weekday.Sunday || day === Weekday.Saturday) {
    console.log("Enjoy the weekend :)");
}
else {
    console.log("Not a valid day");
}
// Expressions vs Statements
// expression
44;
// statement, but "45s233ead33fs3ee2" is an expression
var id = "45s233ead33fs3ee2";
// statement
if (id === "45s233ead33fs3ee2") {
    console.log("hexadecimal ID");
}
else {
    console.error("unknown ID");
}
console.log("Hello " + 
// only accepts expression
// if (id == "fsd689sd02a") => Error
44 + "!");
// Ternary Operator
// one of the few operators that have 3 operands
var a = 34;
a > 10 ? console.log("a is greater than 10!") : console.log("a is not so big.");
// more common use case of ternary Operator
console.log("" + (a > 10 ? "a is greater than 10!" : "a is not so big"));
