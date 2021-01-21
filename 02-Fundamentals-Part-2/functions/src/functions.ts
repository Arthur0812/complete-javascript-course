// Functions

function logger(): void {
  console.log("My name is Jonas");
}

// calling functions
logger();
logger();
logger();
logger();

console.log(max(5, 4, 4));

function max(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}

let firstJuice = juiceMaker(
  false,
  "apple",
  "apple",
  "peach",
  "strawberry",
  "strawberry",
  "banana",
  "nothing"
);

console.log(firstJuice);

enum Fruit {
  Apple = "apple",
  Banana = "banana",
  Peach = "peach",
  Orange = "orange",
  Lemon = "lemon",
  Strawberry = "strawberry",
  Pineapple = "pineapple",
  Cranberry = "cranberry",
}

function juiceMaker(comma = false, ...fruits: string[]): string {
  let between = " and";
  if (comma) {
    between = ",";
  }
  const counts = {
    apple: 0,
    banana: 0,
    peach: 0,
    orange: 0,
    lemon: 0,
    strawberry: 0,
    pineapple: 0,
    cranberry: 0,
  };

  for (const e of fruits) {
    let fruit = e as Fruit;
    if (!fruit) {
      continue;
    }
    counts[fruit]++;
  }

  let juice = `Juice contains`;

  let k: keyof typeof counts;
  let i = 0;
  for (k in counts) {
    const v = counts[k];
    if (v > 0) {
      if (i != 0) {
        juice += between;
      }
      i++;
      if (v == 1) {
        juice += ` ${v} ${k}`;
        continue;
      }
      if (k.substr(k.length - 1, 1) === "y") {
        let c = k.substr(0, k.length - 1);
        juice += ` ${v} ${c}ies`;
        continue;
      }
      juice += ` ${v} ${k}s`;
    }
  }

  juice += ".";
  return juice;
}

let secondTry = juiceMaker(
  true,
  "apple",
  "banana",
  "banana",
  "cranberry",
  "cranberry",
  "lemon"
);

console.log(secondTry);

// Functions Declarations vs Function Expressions
interface AgeFunc {
  (year: number): number;
}

let age = calcAgeDecl(1991); // function declarations are hoisted
console.log(age);

// AgeFunc not so easily inferrable
function calcAgeDecl(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

// age = calcAgeExpr(2004);  => function expressions are not hoisted
// console.log(age)

const calcAgeExpr: AgeFunc = function (birthYear: number): number {
  return new Date().getFullYear() - birthYear;
};

age = calcAgeExpr(2004);
console.log(age);

// Arrow Functions
// -> always function expressions

const calcAgeArrow: AgeFunc = (birthYear: number) =>
  new Date().getFullYear() - birthYear;

age = calcAgeArrow(2010);
console.log(age);

const retirementAge = 65;

const yearsUntilRetirement: AgeFunc = (birthYear: number): number => {
  let age = calcAgeArrow(birthYear);
  if (age >= retirementAge) {
    return 0;
  }
  return retirementAge - age;
};

let years = yearsUntilRetirement(2004);
console.log(years);
