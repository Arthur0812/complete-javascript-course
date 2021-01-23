// Arrays

let friend1 = "Michael";
let friend2 = "Steven";
let friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];

// index (0-based)
friend1 = friends[0];
friend2 = friends[1];
friend3 = friends[2];

friends.forEach((_, index, friends) => {
  console.log(friends[index], index, friends);
});

// same as

friends.forEach((friend, index, friends) => {
  console.log(friend, index, friends);
});

const years = new Array(1991, 1984, 2005, 2020);
let now = new Date().getFullYear();

const ages = years.map((year) => {
  return now - year;
});

console.log("ages:", ages);

const fullAge = 18;

const fullAges = ages.filter((age) => {
  return age >= fullAge;
});

if (fullAges.length == 0) {
  console.log("no full ages here...");
} else {
  console.log("full ages:", fullAges);
}

const sumAges = ages.reduce((prev, age) => {
  return prev + age;
});

console.log("sum of all ages:", sumAges);

if (fullAges.constructor.prototype == Array.prototype) {
  console.log("fullAges does have the prototype of an array.");
}

// traditional for loop
for (let i = 0; i < years.length; i++) {
  console.log("index:", i, "element:", years[i]);
}

// last element of an array
let lastYear = years[years.length - 1];

console.log("last year:", lastYear);

console.log("type:", typeof years);

// Methods

let newLength = friends.push("John");

// newLength == 4 -> true

newLength = friends.unshift("Ben");

// newLength == 5 -> true

console.log("new friends:", friends);

let lastFriend = friends.pop();
if (!lastFriend) {
  // array was already empty, so lastFriend is undefined, as no item could be removed
}
console.log("last friend:", lastFriend);

let firstFriend = friends.shift();
if (!firstFriend) {
  // array was already empty, so firstFriend is undefined, as no item could be removed
}
console.log("first friend:", firstFriend);

console.log("shorter array:", friends);

let idx = friends.indexOf("Steven");
let steven = friends[idx];
console.log(steven);

idx = friends.indexOf("John");
// idx == -1 -> true, -1 stands for not found index
