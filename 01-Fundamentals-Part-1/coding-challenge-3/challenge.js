var Team = /** @class */ (function () {
    function Team(name, score) {
        this.name = name;
        this.score = score;
    }
    Team.prototype.calculateAverage = function () {
        var sum = this.score.reduce(function (prev, curr) {
            return prev + curr;
        });
        this.average = Number((sum / this.score.length).toFixed(2));
        return this.average;
    };
    return Team;
}());
var dolphins = new Team("Dolphins", [97, 112, 101]);
var koalas = new Team("Koalas", [109, 95, 106]);
function determineWinner(first, second) {
    var firstAverage = first.calculateAverage();
    var secondAverage = second.calculateAverage();
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
    }
    else if (firstAverage == secondAverage) {
        return [first, true];
    }
    else {
        return [second, false];
    }
}
var _a = determineWinner(dolphins, koalas), winner = _a[0], isTie = _a[1];
if (!winner) {
    console.log("No winner could be determined.");
}
else if (isTie) {
    console.log("Tie! Both teams scored " + winner.average + " points on average!");
}
else {
    console.log("And the winner is... " + winner.name + "! With an average score of " + winner.average);
}
