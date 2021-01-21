"use strict";
// Functions
function logger() {
    console.log("My name is Jonas");
}
// calling functions
logger();
logger();
logger();
logger();
console.log(max(5, 4, 4));
function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    return c;
}
var firstJuice = juiceMaker(false, "apple", "apple", "peach", "strawberry", "strawberry", "banana", "nothing");
console.log(firstJuice);
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "apple";
    Fruit["Banana"] = "banana";
    Fruit["Peach"] = "peach";
    Fruit["Orange"] = "orange";
    Fruit["Lemon"] = "lemon";
    Fruit["Strawberry"] = "strawberry";
    Fruit["Pineapple"] = "pineapple";
    Fruit["Cranberry"] = "cranberry";
})(Fruit || (Fruit = {}));
function juiceMaker(comma) {
    if (comma === void 0) { comma = false; }
    var fruits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruits[_i - 1] = arguments[_i];
    }
    var between = " and";
    if (comma) {
        between = ",";
    }
    var counts = {
        apple: 0,
        banana: 0,
        peach: 0,
        orange: 0,
        lemon: 0,
        strawberry: 0,
        pineapple: 0,
        cranberry: 0
    };
    for (var _a = 0, fruits_1 = fruits; _a < fruits_1.length; _a++) {
        var e = fruits_1[_a];
        var fruit = e;
        if (!fruit) {
            continue;
        }
        counts[fruit]++;
    }
    var juice = "Juice contains";
    var k;
    var i = 0;
    for (k in counts) {
        var v = counts[k];
        if (v > 0) {
            if (i != 0) {
                juice += between;
            }
            i++;
            if (v == 1) {
                juice += " " + v + " " + k;
                continue;
            }
            if (k.substr(k.length - 1, 1) === "y") {
                var c = k.substr(0, k.length - 1);
                juice += " " + v + " " + c + "ies";
                continue;
            }
            juice += " " + v + " " + k + "s";
        }
    }
    juice += ".";
    return juice;
}
var secondTry = juiceMaker(true, "apple", "banana", "banana", "cranberry", "cranberry", "lemon");
console.log(secondTry);
var age = calcAgeDecl(1991); // function declarations are hoisted
console.log(age);
// AgeFunc not so easily inferrable
function calcAgeDecl(birthYear) {
    return new Date().getFullYear() - birthYear;
}
// age = calcAgeExpr(2004);  => function expressions are not hoisted
// console.log(age)
var calcAgeExpr = function (birthYear) {
    return new Date().getFullYear() - birthYear;
};
age = calcAgeExpr(2004);
console.log(age);
// Arrow Functions
// -> always function expressions
var calcAgeArrow = function (birthYear) {
    return new Date().getFullYear() - birthYear;
};
age = calcAgeArrow(2010);
console.log(age);
var retirementAge = 65;
var yearsUntilRetirement = function (birthYear) {
    var age = calcAgeArrow(birthYear);
    if (age >= retirementAge) {
        return 0;
    }
    return retirementAge - age;
};
var years = yearsUntilRetirement(2004);
console.log(years);
