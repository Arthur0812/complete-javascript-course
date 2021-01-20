class TipCalculator {
  bills: number[];
  tips: number[];

  constructor(bills: number[]) {
    this.setBills(bills);
  }

  setBills(bills: number[]) {
    this.tips = [];
    this.bills = bills.map((bill) => {
      return Number(bill.toFixed(2));
    });
    this.calculateTips();
  }

  calculateTips() {
    this.bills.forEach((bill) => {
      let percentage = bill <= 300 && bill >= 50 ? 15 : 20;
      this.tips.push(Number(((bill * percentage) / 100).toFixed(2)));
    });
  }

  logTips() {
    this.bills.forEach((bill, i) => {
      let tip = this.tips[i];
      console.log(
        `Bill: ${bill}, Tip: ${tip}, Total: ${Number((bill + tip).toFixed(2))}`
      );
    });
  }
}

const myCalculator = new TipCalculator([275.5, 40, 430]);

myCalculator.logTips();

myCalculator.setBills([180.7, 304.25, 200.99, 111.11]);

myCalculator.logTips();
