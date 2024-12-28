const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let humanScore = 0;
let computerScore = 0;

function getChoice(choice) {
    if (choice === ROCK) {
        return 'rock';
    } else if (choice === PAPER) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getComputerChoice() {
    const choice = Math.floor((Math.random() * 3));

    return getChoice(choice);
}

const resultsDiv = document.querySelector('#results');

function playRound(humanChoice, computerChoice) {
    let results = '';
    humanChoice = humanChoice.toLowerCase();

    results += `You chose ${humanChoice}, `;
    results += `Computer chose ${computerChoice}, `;

    if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'scissors' && computerChoice === 'paper') 
        || (humanChoice === 'paper' && computerChoice === 'rock')) {
            results += `You win! ${humanChoice} wins ${computerChoice}.`;
            humanScore += 1;
    } else if (humanChoice === computerChoice) {
        results += 'Its a draw!';
    } else {
        results += `You lose! ${computerChoice} wins ${humanChoice}.`;
        computerScore += 1;
    }
    resultsDiv.textContent = results;
}

const buttons = document.querySelector('#buttons');

buttons?.addEventListener('click', (e) => {
    let target = e.target;

    playRound(target.id, getComputerChoice());

});
