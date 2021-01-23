// Objects

interface Person {
  firstName: string;
  lastName: string;
  birthYear: number;
  job: Job;
  friends: string[];
  country: Country;
  age?: number;
  hasDriversLicense: boolean;
  calcAge?(): number;
  canDrive?(): boolean;
}

enum Job {
  "teacher",
  "designer",
  "software engineer",
  "actor",
  "driver",
  "student",
}

enum Country {
  "Germany",
  "England",
  "France",
  "US",
  "Belgium",
  "Sweden",
  "Spain",
  "Portugal",
  "Italy",
  "Japan",
  "China",
  "South Korea",
  "Russia",
  "Australia",
  "Brazil",
  "South Africa",
  "Ghana",
  "Nigeria",
}

let jonas: Person = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: Job.teacher,
  friends: ["Michael", "Peter", "Steven"],
  country: Country.Portugal,
  hasDriversLicense: true,
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

let property = prompt("What do you know about jonas?", "firstName");
if (property) {
  console.log(jonas);
}

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends${
    jonas.friends.length == 0
      ? "."
      : `, and his best friend is called ${jonas.friends[0]}.`
  }`
);

// Methods

let now = new Date().getFullYear();

let fullYear = 18;

let marie: Person = {
  firstName: "Marie",
  lastName: "Schmidt",
  birthYear: 2003,
  job: Job.student,
  friends: [],
  country: Country.Germany,
  hasDriversLicense: true,
  calcAge: function (): number {
    return (this.age = now - this.birthYear);
  },
  canDrive: function (): boolean {
    if (!this.calcAge) {
      return false;
    }
    if (!this.age) this.calcAge();

    return (this.age as number) >= fullYear && this.hasDriversLicense;
  },
};

console.log(
  `${marie.firstName} is a ${(marie.calcAge as () => number)()} years old ${
    Job[marie.job]
  }, and has ${marie.hasDriversLicense ? "" : "no "}drivers license.`
);

let canDrive = (marie.canDrive as () => boolean)();
console.log(canDrive);
