// Using ES 2015 Module Syntax

// App module depends on Player and Game modules
import assignPlayerName from './player.js'; // this line is importing the default export from player.js file.
import { printGame, calculateScore, getProblemCount } from './game.js';

console.log("Loading with SystemJS");

// add click handler to the start game button
document.getElementById("startGame").addEventListener("click", function () {
    assignPlayerName(document.getElementById("playername").value);
    printGame();
});

// add click handler to the calculate score button
document.getElementById("calculate").addEventListener("click", function () {
    calculateScore();
});

// set the default number of problems
document.getElementById("problemCount").value = getProblemCount();
