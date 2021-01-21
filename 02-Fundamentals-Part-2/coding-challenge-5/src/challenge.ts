class Team {
  name: string;
  scores: number[];
  average?: number;

  constructor(name: string, ...scores: number[]) {
    this.name = name;
    this.scores = scores;

    this.calcAverage();
  }

  calcAverage = () => {
    let sum = this.scores.reduce((sum, score): number => {
      return sum + score;
    });
    this.average = Number((sum / this.scores.length).toFixed(2));
  };
}

function checkWinner(first: Team, second: Team) {
  if (!first.average || !second.average) {
    return;
  }

  if (first.average >= second.average * 2) {
    console.log(
      `${first.name} win! (${first.average} points - ${second.average} points)`
    );
  } else if (second.average >= first.average * 2) {
    console.log(
      `${second.name} win! (${second.average} points - ${first.average} points)`
    );
  } else {
    console.error(`No team wins!`);
  }
}

const dolphins = new Team("Dolphins", 85, 54, 41);
const koalas = new Team("Koalas", 23, 34, 27);

checkWinner(dolphins, koalas);
