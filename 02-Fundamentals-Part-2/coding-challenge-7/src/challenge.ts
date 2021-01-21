interface Person {
  firstName: string;
  sirName: string;
  mass: number;
  height: number;
  age: number;
  bmi?: number;
  calculateBMI(): void;
}

function calcBMI(age: number, mass: number, height: number): number {
  let bmi = mass / height ** 2;
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

const mark: Person = {
  firstName: "Mark",
  sirName: "Miller",
  age: 14,
  height: 1.69,
  mass: 78,
  calculateBMI: function (): void {
    this.bmi = Number(calcBMI(this.age, this.mass, this.height).toFixed(2));
  },
};

const john: Person = {
  firstName: "John",
  sirName: "Smith",
  age: 16,
  height: 1.95,
  mass: 92,
  calculateBMI: function (): void {
    this.bmi = Number(calcBMI(this.age, this.mass, this.height).toFixed(2));
  },
};

function hasHigherBMI(first: Person, second: Person) {
  first.calculateBMI();
  second.calculateBMI();

  if (!first.bmi || !second.bmi) {
    return;
  }

  if (first.bmi == second.bmi) {
    console.log(
      `Both ${first.firstName} and ${second.firstName} have a BMI ${first.bmi}`
    );
  } else if (first.bmi > second.bmi) {
    console.log(
      `${first.firstName}'s BMI (${first.bmi}) is greater than ${second.firstName}'s (${second.bmi})`
    );
  } else {
    console.log(`
      ${second.firstName}'s BMI (${second.bmi}) is greater than ${first.firstName}'s (${first.bmi})`);
  }
}

hasHigherBMI(mark, john);
