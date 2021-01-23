"use strict";
// Objects
var Job;
(function (Job) {
    Job[Job["teacher"] = 0] = "teacher";
    Job[Job["designer"] = 1] = "designer";
    Job[Job["software engineer"] = 2] = "software engineer";
    Job[Job["actor"] = 3] = "actor";
    Job[Job["driver"] = 4] = "driver";
    Job[Job["student"] = 5] = "student";
})(Job || (Job = {}));
var Country;
(function (Country) {
    Country[Country["Germany"] = 0] = "Germany";
    Country[Country["England"] = 1] = "England";
    Country[Country["France"] = 2] = "France";
    Country[Country["US"] = 3] = "US";
    Country[Country["Belgium"] = 4] = "Belgium";
    Country[Country["Sweden"] = 5] = "Sweden";
    Country[Country["Spain"] = 6] = "Spain";
    Country[Country["Portugal"] = 7] = "Portugal";
    Country[Country["Italy"] = 8] = "Italy";
    Country[Country["Japan"] = 9] = "Japan";
    Country[Country["China"] = 10] = "China";
    Country[Country["South Korea"] = 11] = "South Korea";
    Country[Country["Russia"] = 12] = "Russia";
    Country[Country["Australia"] = 13] = "Australia";
    Country[Country["Brazil"] = 14] = "Brazil";
    Country[Country["South Africa"] = 15] = "South Africa";
    Country[Country["Ghana"] = 16] = "Ghana";
    Country[Country["Nigeria"] = 17] = "Nigeria";
})(Country || (Country = {}));
var jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: Job.teacher,
    friends: ["Michael", "Peter", "Steven"],
    country: Country.Portugal,
    hasDriversLicense: true
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);
var property = prompt("What do you know about jonas?", "firstName");
if (property) {
    console.log(jonas);
}
console.log(jonas.firstName + " has " + jonas.friends.length + " friends" + (jonas.friends.length == 0
    ? "."
    : ", and his best friend is called " + jonas.friends[0] + "."));
// Methods
var now = new Date().getFullYear();
var fullYear = 18;
var marie = {
    firstName: "Marie",
    lastName: "Schmidt",
    birthYear: 2003,
    job: Job.student,
    friends: [],
    country: Country.Germany,
    hasDriversLicense: true,
    calcAge: function () {
        return (this.age = now - this.birthYear);
    },
    canDrive: function () {
        if (!this.calcAge) {
            return false;
        }
        if (!this.age)
            this.calcAge();
        return this.age >= fullYear && this.hasDriversLicense;
    }
};
console.log(marie.firstName + " is a " + marie.calcAge() + " years old " + Job[marie.job] + ", and has " + (marie.hasDriversLicense ? "" : "no ") + "drivers license.");
var canDrive = marie.canDrive();
console.log(canDrive);
