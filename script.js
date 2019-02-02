let compChoice;
let playerChoice;
let compWins = 0;
let playerWins = 0;
let rounds = 5;

function getRandom() {
    return Math.floor(Math.random() * 10);
}

function computerPlay() {
    let getRand = getRandom();
    if (getRand <= 3) {
        compChoice = 'scissors';
    } else if (getRand <= 6) {
        compChoice = 'rock';
    } else {
        compChoice = 'paper'
    }
}

function getPlayerChoice() {
    playerChoice = prompt('Rock, paper or scissors?');
    if (!playerChoice || !isNaN(playerChoice) ) {
        console.log('Please enter a valid choice.');
        getPlayerChoice();
    }
    playerChoice = playerChoice.toLowerCase();
}

function getResults() {
    if (playerChoice === compChoice) {
        return('It\'s a draw!');
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        playerWins++;
        return('Player Wins!');
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        playerWins++;
        return('Player Wins!');
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        playerWins++;
        return('Player Wins!');
    } else {
        compWins++;
        return('Computer Wins!');
    }
}

function getChoices() {
    console.log('The game is starting...');
    console.log(`Computer chose ${compChoice}!`)
    console.log(`Player chose ${playerChoice}!`)
}

function getScore() {
    console.log(`Player: ${playerWins} wins | Computer: ${compWins} wins`);
    console.log('\n');
}

function startGame() { 
    for (i = 0 ; i < rounds ; i++) {
        computerPlay();
        getPlayerChoice();
        getChoices();
        getResults();
        getScore();
    }
    getEndScreen();
}

function getEndScreen() {
    console.log('Game is over!')
    if (playerWins > compWins) {
        return('Player wins!');
    } else if (playerWins < compWins) {
        return('Computer Wins!');
    } else {
        return('It\'s a draw!');
    }
}

startGame();
