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
        return "You win! Rock beats Scissors"
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Select your weapon: Rock, Paper or Scissors").toLowerCase();
console.log(playRound("rock", computerSelection));