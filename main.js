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

function getHumanChoice() {
    const choice = prompt('Rock, paper or scissors?');

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'scissors' && computerChoice === 'paper') 
        || (humanChoice === 'paper' && computerChoice === 'rock')) {
            console.log(`You win! ${humanChoice} wins ${computerChoice}`);
            humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log('Its a draw!');
    } else {
        console.log(`You lose! ${computerChoice} wins ${humanChoice}`);
        computerScore += 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
