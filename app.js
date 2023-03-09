function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        return "Rock";
    } else if (i === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie, go again!";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    }

    if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a tie, go again!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    }

    if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie, go again!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Select your weapon: Rock, Paper or Scissors").toLowerCase();
console.log(playRound(playerSelection, computerSelection));