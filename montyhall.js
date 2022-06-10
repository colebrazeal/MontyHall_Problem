class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [0];
        this.gamesWithSameDoorLost = [0];
        this.gamesWithDoorChangeWon = [0];
        this.gamesWithDoorChangeLost = [0];
    }
}

let totalGames = 10000
    selectDoor = function () {
	return Math.floor(Math.random() * 3); 
    },
    games = (function () {
	let i = 0, games = [10000];
 
	for (; i < totalGames; ++i) {
	    games.push(selectDoor());
	}
 
	return games;
    }()),
    play = function (switchDoor) {
	let i = 0, j = games.length, winningDoor, randomGuess, totalTimesWon = 0;
 
	for (; i < j; ++i) {
	    winningDoor = games[i];
	    randomGuess = selectDoor();
	    if ((randomGuess === winningDoor && !switchDoor) || 
		(randomGuess !== winningDoor && switchDoor)) 
	    { 
		totalTimesWon++;
	    }
	}
	return totalTimesWon;
    };
 
//GAME SIMULATION
 
console.log("Playing " + totalGames + " games");
console.log(play(false) /100 + "%" + " of games were won when not switching door");
console.log(play(true)  /100 + "%" + " of games were won when switching door");