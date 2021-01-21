"use strict";
function calcBMI(age, mass, height) {
    var bmi = mass / Math.pow(height, 2);
    switch (true) {
        case age > 0 && age < 10:
            bmi *= 1.05;
        case age >= 10 && age <= 18:
            bmi *= 1.025;
        case age > 18 && age < 40:
            bmi *= 1;
        default:
            bmi *= 1.025;
    }
    return bmi;
}
var mark = {
    firstName: "Mark",
    sirName: "Miller",
    age: 14,
    height: 1.69,
    mass: 78,
    calculateBMI: function () {
        this.bmi = Number(calcBMI(this.age, this.mass, this.height).toFixed(2));
    }
};
var john = {
    firstName: "John",
    sirName: "Smith",
    age: 16,
    height: 1.95,
    mass: 92,
    calculateBMI: function () {
        this.bmi = Number(calcBMI(this.age, this.mass, this.height).toFixed(2));
    }
};
function hasHigherBMI(first, second) {
    first.calculateBMI();
    second.calculateBMI();
    if (!first.bmi || !second.bmi) {
        return;
    }
    if (first.bmi == second.bmi) {
        console.log("Both " + first.firstName + " and " + second.firstName + " have a BMI " + first.bmi);
    }
    else if (first.bmi > second.bmi) {
        console.log(first.firstName + "'s BMI (" + first.bmi + ") is greater than " + second.firstName + "'s (" + second.bmi + ")");
    }
    else {
        console.log("\n      " + second.firstName + "'s BMI (" + second.bmi + ") is greater than " + first.firstName + "'s (" + first.bmi + ")");
    }
}
hasHigherBMI(mark, john);
