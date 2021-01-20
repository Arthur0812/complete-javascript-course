let heightMark = 1.88;
let heightJohn = 1.76;
let massMark = 95;
let massJohn = 85;

function calculateBMI(mass: number, height: number): number {
  return mass / height ** 2;
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
  console.warn("Mark has a greater BMI than John.");
} else {
  console.log("Mark has an equal or smaller BMI than John.");
}

console.log("this is a test");
