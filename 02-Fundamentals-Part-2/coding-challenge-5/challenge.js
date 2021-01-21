"use strict";
var Team = /** @class */ (function () {
    function Team(name) {
        var _this = this;
        var scores = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scores[_i - 1] = arguments[_i];
        }
        this.calcAverage = function () {
            var sum = _this.scores.reduce(function (sum, score) {
                return sum + score;
            });
            _this.average = Number((sum / _this.scores.length).toFixed(2));
        };
        this.name = name;
        this.scores = scores;
        this.calcAverage();
    }
    return Team;
}());
function checkWinner(first, second) {
    if (!first.average || !second.average) {
        return;
    }
    if (first.average >= second.average * 2) {
        console.log(first.name + " win! (" + first.average + " points - " + second.average + " points)");
    }
    else if (second.average >= first.average * 2) {
        console.log(second.name + " win! (" + second.average + " points - " + first.average + " points)");
    }
    else {
        console.error("No team wins!");
    }
}
var dolphins = new Team("Dolphins", 85, 54, 41);
var koalas = new Team("Koalas", 23, 34, 27);
checkWinner(dolphins, koalas);
