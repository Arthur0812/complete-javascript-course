"use strict";
var TipCalculator = /** @class */ (function () {
    function TipCalculator() {
        var bills = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bills[_i] = arguments[_i];
        }
        this.bills = bills;
        this.tips = [];
        this.totals = [];
        this.calcTips();
    }
    TipCalculator.prototype.calcTips = function () {
        this.tips = this.bills.map(function (bill) {
            return calcTip(bill);
        });
    };
    TipCalculator.prototype.calcTotals = function () {
        var _this = this;
        this.totals = this.bills.map(function (bill, i) {
            return bill + _this.tips[i];
        });
        return this.totals;
    };
    TipCalculator.prototype.calcAverage = function () {
        var sum = this.totals.reduce(function (sum, n) {
            return sum + n;
        });
        this.average = Number((sum / this.totals.length).toFixed(2));
        return this.average;
    };
    return TipCalculator;
}());
function calcTip(bill) {
    var percentage = 20;
    if (bill >= 50 && bill <= 300) {
        percentage = 15;
    }
    return Number(((bill * percentage) / 100).toFixed(2));
}
var myTipCalculator = new TipCalculator(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
var totals = myTipCalculator.calcTotals();
console.log(totals);
var avg = myTipCalculator.calcAverage();
console.log("average total:", avg);
