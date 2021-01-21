class TipCalculator {
  bills: number[];
  tips: number[];
  totals: number[];
  average?: number;

  constructor(...bills: number[]) {
    this.bills = bills;
    this.tips = [];
    this.totals = [];

    this.calcTips();
  }

  calcTips() {
    this.tips = this.bills.map((bill) => {
      return calcTip(bill);
    });
  }

  calcTotals(): number[] {
    this.totals = this.bills.map((bill, i) => {
      return bill + this.tips[i];
    });
    return this.totals;
  }

  calcAverage(): number {
    let sum = this.totals.reduce((sum, n) => {
      return sum + n;
    });
    this.average = Number((sum / this.totals.length).toFixed(2));
    return this.average;
  }
}

function calcTip(bill: number): number {
  let percentage = 20;
  if (bill >= 50 && bill <= 300) {
    percentage = 15;
  }
  return Number(((bill * percentage) / 100).toFixed(2));
}

const myTipCalculator = new TipCalculator(
  22,
  295,
  176,
  440,
  37,
  105,
  10,
  1100,
  86,
  52
);

let totals = myTipCalculator.calcTotals();

console.log(totals);

let avg = myTipCalculator.calcAverage();

console.log("average total:", avg);
