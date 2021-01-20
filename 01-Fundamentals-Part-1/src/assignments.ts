// PRACTICE ASSIGNMENTS

// Values and Variables

// 1.
const continent = "Europe",
  country = "Germany";
let population = 81;

// 2.
console.log(continent + ": " + country + ": " + population);

// Data Types

// 1.
const isIsland = false;
let language: string;

// 2.
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// let, const, var

// 1.
language = "German";

// 2. => look above

// 3.
// isIsland = true;

// Basic Operators

// 1.
let halfPopulation = population / 2;

// 2.
population++;
console.log(population);

// 3.
let populationFinnland = 6;
let moreThanFinnland = population > populationFinnland;
console.log("greater population than finnland?", moreThanFinnland);

// 4.
let populationAverage = 33;
let moreThanAverage = population > populationAverage;
console.log("greater population than average country?", moreThanAverage);

// 5.
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people can all speak " +
  language;
console.log(description);

// Strings and Template Literals

// 1.
description = `${country} is in ${continent}, and its ${population} million people can all speak ${language}.`;
console.log(description);

// if / else statements

// 1.
if (population > populationAverage) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      populationAverage - population
    } million below average.`
  );
}

// 2. done

// type conversion and coercion

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const me: User = new UserAccount("Arthur", 0);

function printUser(u: User) {
  console.log(`${u.name}'s name: ${u.name}`);
  console.log(`${u.name}'s id: ${u.id}`);
}

printUser(me);

console.log("length:", getLength("string"));
console.log("length:", getLength(["now", "not", "nothin'"]));

// type unions
function getLength(obj: string | string[]): number {
  return obj.length;
}
