const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

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