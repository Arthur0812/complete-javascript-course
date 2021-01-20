var Person = /** @class */ (function () {
    function Person(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    }
    Person.prototype.calculateBMI = function () {
        this.bmi = this.mass / Math.pow(this.height, 2);
    };
    return Person;
}());
var mark = new Person("Mark", 75, 1.8);
var john = new Person("John", 85, 1.9);
mark.calculateBMI();
john.calculateBMI();
if (mark.bmi > john.bmi) {
    console.log(mark.name + "'s BMI (" + mark.bmi + ") is greater than " + john.name + "'s BMI (" + john.bmi + ")");
}
else if (mark.bmi == john.bmi) {
    console.log(mark.name + "'s BMI and " + john.name + "'s BMI are the same (" + mark.bmi + ")");
}
else {
    console.log(john.name + "'s BMI (" + john.bmi + ") is greater than " + mark.name + "'s BMI (" + mark.bmi + ")");
}
