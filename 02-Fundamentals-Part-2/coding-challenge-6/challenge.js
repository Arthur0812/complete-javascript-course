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
    }
    TipCalculator.prototype.calcTips = function () {
        var _this = this;
        this.bills.forEach(function (bill) {
            var tip = calcTip(bill);
            _this.tips.push(tip);
        });
        return this.tips;
    };
    TipCalculator.prototype.calcTotals = function () {
        var _this = this;
        this.bills.forEach(function (bill, i) {
            var total = bill + _this.tips[i];
            _this.totals.push(total);
        });
        return this.totals;
    };
    return TipCalculator;
}());
function calcTip(tip) {
    var percentage = 20;
    if (tip >= 50 && tip <= 300) {
        percentage = 15;
    }
    return Number(((tip * percentage) / 100).toFixed(2));
}
var myTipCalculator = new TipCalculator(125, 555, 44);
myTipCalculator.calcTips();
var totals = myTipCalculator.calcTotals();
console.log(totals);
