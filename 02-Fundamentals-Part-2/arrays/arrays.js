"use strict";
// Arrays
var friend1 = "Michael";
var friend2 = "Steven";
var friend3 = "Peter";
var friends = ["Micheal", "Steven", "Peter"];
// index (0-based)
friend1 = friends[0];
friend2 = friends[1];
friend3 = friends[2];
friends.forEach(function (_, index, friends) {
    console.log(friends[index], index, friends);
});
// same as
friends.forEach(function (friend, index, friends) {
    console.log(friend, index, friends);
});
var years = new Array(1991, 1984, 2005, 2020);
var now = new Date().getFullYear();
var ages = years.map(function (year) {
    return now - year;
});
console.log("ages:", ages);
var fullAge = 18;
var fullAges = ages.filter(function (age) {
    return age >= fullAge;
});
if (fullAges.length == 0) {
    console.log("no full ages here...");
}
else {
    console.log("full ages:", fullAges);
}
var sumAges = ages.reduce(function (prev, age) {
    return prev + age;
});
console.log("sum of all ages:", sumAges);
if (fullAges.constructor.prototype == Array.prototype) {
    console.log("fullAges does have the prototype of an array.");
}
// traditional loop
for (var i = 0; i < years.length; i++) {
    console.log("index:", i, "element:", years[i]);
}
// last element of an array
var lastYear = years[years.length - 1];
console.log("last year:", lastYear);
console.log("type:", typeof years);
// Methods
var newLength = friends.push("John");
// newLength == 4 -> true
newLength = friends.unshift("Ben");
// newLength == 5 -> true
console.log("new friends:", friends);
var lastFriend = friends.pop();
if (!lastFriend) {
    // array was already empty, so lastFriend is undefined, as no item could be removed
}
console.log("last friend:", lastFriend);
var firstFriend = friends.shift();
if (!firstFriend) {
    // array was already empty, so firstFriend is undefined, as no item could be removed
}
console.log("first friend:", firstFriend);
console.log("shorter array:", friends);
var idx = friends.indexOf("Steven");
var steven = friends[idx];
console.log(steven);
idx = friends.indexOf("John");
// idx == -1 -> true, -1 stands for not found index
