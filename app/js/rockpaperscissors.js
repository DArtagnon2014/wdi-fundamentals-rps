////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    //console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// ************ ATTENTION!! ********************
// This code has been adjusted to work best in repl.it

// Variables
var playerMove = '';
var computerMove = '';
var win = '';

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = getInput();
    if (move === null) {
        move = getInput();
    }
    playerMove = move;
    return move; //another option return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    computerMove = move;
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "scissors" && computerMove === 'scissors') {
    	winner = "Tie.";
    } else if (playerMove === "scissors" && computerMove === 'rock') {
    	winner = "computer";
    } else if (playerMove === "scissors" && computerMove === 'paper') {
    	winner = "player";
    }
    if (playerMove === "rock" && computerMove === 'rock') {
    	winner = "Tie.";
    } else if (playerMove === "rock" && computerMove === 'paper') {
    	winner = "computer";
    } else if (playerMove === "rock" && computerMove === 'scissors') {
    	winner = "player";
    }
    if (playerMove === "paper" && computerMove === 'paper') {
    	winner = "Tie";
    } else if (playerMove === "paper" && computerMove === 'scissors') {
    	winner = "computer";
    } else if (playerMove === "paper" && computerMove === 'rock') {
    	winner = "player";
    }
    return winner;
}

/*
switch(getWinner(playerMove,computerMove)) {
    case 'You Win!': 
        win = 'player';
        break;
    case 'You Lose!': 
        win = 'computer';
        break;
    default : win = 'tie';
 }
*/

function playToFive() {
    //console.log("Let's play Rock, Paper, Scissors");
    window.alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
        getPlayerMove();
        getComputerMove();
        //console.log(playerMove);
        //console.log(computerMove);
        win = getWinner(playerMove,computerMove);
        if (win === "player"){
            playerWins += 1;
            //console.log("You win this round!");
            window.alert("You win this round! " + [playerWins, computerWins]);
        } else if (win === "computer"){
            computerWins += 1;
            //console.log("You lose this round.");
            window.alert("You lose this round. " + [playerWins, computerWins]);
        } else{
            //console.log("Tie");
            window.alert("Tie " + [playerWins, computerWins]);
        }
    } while (playerWins < 5 && computerWins < 5) 
    return [playerWins, computerWins];
}

playToFive();



