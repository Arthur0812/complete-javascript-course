class Person {
  name: string;
  mass: number;
  height: number;
  bmi: number;

  constructor(name: string, mass: number, height: number) {
    this.name = name;
    this.mass = mass;
    this.height = height;
  }

  calculateBMI() {
    this.bmi = this.mass / this.height ** 2;
  }
}

let mark = new Person("Mark", 75, 1.8);
let john = new Person("John", 85, 1.9);

mark.calculateBMI();
john.calculateBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.name}'s BMI (${mark.bmi}) is greater than ${john.name}'s BMI (${john.bmi})`
  );
} else if (mark.bmi == john.bmi) {
  console.log(
    `${mark.name}'s BMI and ${john.name}'s BMI are the same (${mark.bmi})`
  );
} else {
  console.log(
    `${john.name}'s BMI (${john.bmi}) is greater than ${mark.name}'s BMI (${mark.bmi})`
  );
}
