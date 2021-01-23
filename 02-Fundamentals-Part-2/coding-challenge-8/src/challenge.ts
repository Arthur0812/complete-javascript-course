class TipCalculator {
  bills: number[];
  tips: number[];
  totals: number[];

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
}

function calcTip(bill: number): number {
  let percentage = 20;
  if (bill >= 50 && bill <= 300) {
    percentage = 15;
  }
  return Number(((bill * percentage) / 100).toFixed(2));
}

function calcAverage(arr: number[]): number {
  let sum = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return Number((sum / arr.length).toFixed(2));
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

let avgTotal = calcAverage(totals);

console.log("average total:", avgTotal);
console.log("average tip:", calcAverage(myTipCalculator.tips));
