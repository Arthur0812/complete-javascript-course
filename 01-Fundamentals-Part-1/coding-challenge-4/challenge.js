var TipCalculator = /** @class */ (function () {
    function TipCalculator(bills) {
        this.setBills(bills);
    }
    TipCalculator.prototype.setBills = function (bills) {
        this.tips = [];
        this.bills = bills.map(function (bill) {
            return Number(bill.toFixed(2));
        });
        this.calculateTips();
    };
    TipCalculator.prototype.calculateTips = function () {
        var _this = this;
        this.bills.forEach(function (bill) {
            var percentage = bill <= 300 && bill >= 50 ? 15 : 20;
            _this.tips.push(Number(((bill * percentage) / 100).toFixed(2)));
        });
    };
    TipCalculator.prototype.logTips = function () {
        var _this = this;
        this.bills.forEach(function (bill, i) {
            var tip = _this.tips[i];
            console.log("Bill: " + bill + ", Tip: " + tip + ", Total: " + Number((bill + tip).toFixed(2)));
        });
    };
    return TipCalculator;
}());
var myCalculator = new TipCalculator([275.5, 40, 430]);
myCalculator.logTips();
myCalculator.setBills([180.7, 304.25, 200.99, 111.11]);
myCalculator.logTips();
