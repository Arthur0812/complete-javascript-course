class Team {
  name: string;
  score: number[];
  average: number;

  constructor(name: string, score: number[]) {
    this.name = name;
    this.score = score;
  }

  calculateAverage(): number {
    let sum = this.score.reduce((prev, curr) => {
      return prev + curr;
    });
    this.average = Number((sum / this.score.length).toFixed(2));
    return this.average;
  }
}

const dolphins = new Team("Dolphins", [97, 112, 101]);
const koalas = new Team("Koalas", [109, 95, 106]);

function determineWinner(first: Team, second: Team): [Team, boolean] {
  let firstAverage = first.calculateAverage();
  let secondAverage = second.calculateAverage();

  if (firstAverage < 100 && secondAverage < 100) {
    return [undefined, false];
  }

  if (firstAverage < 100) {
    return [second, false];
  }
  if (secondAverage < 100) {
    return [first, false];
  }

  if (firstAverage > secondAverage) {
    return [first, false];
  } else if (firstAverage == secondAverage) {
    return [first, true];
  } else {
    return [second, false];
  }
}

let [winner, isTie] = determineWinner(dolphins, koalas);
if (!winner) {
  console.log(`No winner could be determined.`);
} else if (isTie) {
  console.log(`Tie! Both teams scored ${winner.average} points on average!`);
} else {
  console.log(
    `And the winner is... ${winner.name}! With an average score of ${winner.average}`
  );
}
