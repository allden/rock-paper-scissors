let compChoice;
let playerChoice;
// these need a number value otherwise they can't be incremented
// undefined + 1 = error
let compWins = 0;
let playerWins = 0;
let rounds = 5;
let draws = 0;
// quality of life
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let result = document.querySelector('.result');
let wins = document.querySelector('.playerWins');
let losses = document.querySelector('.compWins');
let drawResult = document.querySelector('.draws');
let btn = document.querySelectorAll('button');
let playerFinal = document.querySelector('.playerChoice');
let compFinal = document.querySelector('.computerChoice')
let capitalization = string => string.replace(string[0], string[0].toUpperCase());

// here I add two on-click events, 
// one so that our playerChoice is changed to our selection depending on what we click
// and one that starts our game
rock.addEventListener('click', () => playerChoice = 'rock')
paper.addEventListener('click', () => playerChoice = 'paper')
scissors.addEventListener('click', () => playerChoice = 'scissors')
// iterate through our button nodelist and apply addEventListener to each one
for(i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', startGame);
}

function getRandom() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    let getRand = getRandom();
    if (getRand < 1) {
        compChoice = 'scissors';
    } else if (getRand < 2) {
        compChoice = 'rock';
    } else {
        compChoice = 'paper';
    }
}

// i classes are svgs from fontawesome
// they don't do anything other than make it look prettier

function getResults() {
    playerFinal.innerHTML = `<i class="fas fa-user"></i> ${capitalization(playerChoice)}`;
    compFinal.innerHTML = `<i class="fas fa-desktop"></i> ${capitalization(compChoice)}`; 
    if (playerChoice === compChoice) {
        result.textContent = 'It\'s a draw!';
        draws++;
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        playerWins++;
        result.innerHTML = '<i class="fas fa-user"></i> Wins!'; 
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        playerWins++;
        result.innerHTML = '<i class="fas fa-user"></i> Wins!';
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        playerWins++;
        result.innerHTML = '<i class="fas fa-user"></i> Wins!';
    } else {
        compWins++;
        result.innerHTML = '<i class="fas fa-desktop"></i> Wins!';
    }
}

function getScore() {
    wins.innerHTML = `${playerWins}`; 
    losses.innerHTML = `${compWins}`;
    drawResult.innerHTML = `${draws}`;
}

// go through all of our functions in order
// excluding getRandom, as it is already used in computerPlay
function startGame() {  
    computerPlay();
    getResults();
    getScore();
}
