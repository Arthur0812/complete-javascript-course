class Team {
  name: string;
  score: number[];
  average?: number;

  constructor(name: string, score: number[]) {
    this.name = name;
    this.score = score;
  }

  calculateAverage() {
    let sum = this.score.reduce((prev, curr) => {
      return prev + curr;
    });
    this.average = Number((sum / this.score.length).toFixed(2));
  }
}

const dolphins = new Team("Dolphins", [97, 112, 101]);
const koalas = new Team("Koalas", [109, 95, 106]);

function determineWinner(first: Team, second: Team): [Team | null, boolean] {
  let firstAverage = first.average as number;
  let secondAverage = second.average as number;

  if (firstAverage < 100 && secondAverage < 100) {
    return [null, false];
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
if (winner == null) {
  console.log(`No winner could be determined.`);
} else if (isTie) {
  winner = winner as Team;
  console.log(`Tie! Both teams scored ${winner.average} points on average!`);
} else {
  winner = winner as Team;
  console.log(
    `And the winner is... ${winner.name}! With an average score of ${winner.average}`
  );
}
