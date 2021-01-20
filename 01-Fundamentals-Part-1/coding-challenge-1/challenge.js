"use strict";
var heightMark = 1.88;
var heightJohn = 1.76;
var massMark = 95;
var massJohn = 85;
function calculateBMI(mass, height) {
    return mass / Math.pow(height, 2);
}
var BMIMark = calculateBMI(massMark, heightMark);
var BMIJohn = calculateBMI(massJohn, heightJohn);
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.warn("Mark has a greater BMI than John.");
}
else {
    console.log("Mark has an equal or smaller BMI than John.");
}
console.log("this is a test");
