function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        console.log("Rock");
        return "Rock";
    } else if (i === 1) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
}

getComputerChoice();