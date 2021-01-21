class TipCalculator {
  bills: number[];
  tips: number[];
  totals: number[];

  constructor(...bills: number[]) {
    this.bills = bills;
    this.tips = [];
    this.totals = [];
  }

  calcTips(): number[] {
    this.bills.forEach((bill) => {
      let tip = calcTip(bill);
      this.tips.push(tip);
    });
    return this.tips;
  }

  calcTotals(): number[] {
    this.bills.forEach((bill, i) => {
      let total = bill + this.tips[i];
      this.totals.push(total);
    });
    return this.totals;
  }
}

function calcTip(tip: number): number {
  let percentage = 20;
  if (tip >= 50 && tip <= 300) {
    percentage = 15;
  }
  return Number(((tip * percentage) / 100).toFixed(2));
}

const myTipCalculator = new TipCalculator(125, 555, 44);

myTipCalculator.calcTips();

let totals = myTipCalculator.calcTotals();
console.log(totals);
