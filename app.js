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
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    }

    if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a tie, go again!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    }

    if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie, go again!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    }
}

function game() {
    for (roundCount = 0; roundCount < 5; roundCount++) {
        const playerSelection = prompt("Select your weapon: Rock, Paper or Scissors").toLowerCase();
        console.clear();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore = 0;

game();

if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
} else if (playerScore < computerScore) {
    console.log("You lost, better luck next time!");
} else {
    console.log("It's a tie!");
}