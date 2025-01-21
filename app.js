function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3 + 1);
    switch (compChoice) {
        case 1:
            return ("rock");
            break;
        case 2:
            return ("paper");
            break;
        case 3:
            return ("scissors");
            break;
        default:
            return ("0");
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Input your choice (Rock, Paper, or Scissors):");
    switch (playerChoice.toLowerCase()) {
        case "rock":
            return ("rock");
            break;
        case "paper":
            return ("paper");
            break;
        case "scissors":
            return ("scissors");
            break;
        default:
            alert("Your input must be one of the following: Rock, Paper, or Scissors");
            return getPlayerChoice();
    }
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }

    if (playerScore > computerScore) {
        console.log(`Player wins! Final score: ${playerScore}:${computerScore}!`)
    } else if (computerScore > playerScore) {
        console.log(`Computer wins! Final score: ${computerScore}:${playerScore}!`)
    } else {
        console.log("The final score is a tie!");
    }

    function playRound(playerChoice, compChoice) {
        console.log(`Player chose ${playerChoice}`);
        console.log(`Computer chose ${compChoice}`);
        if (playerChoice === "rock") {
            if (compChoice === "scissors") {
                console.log("You win! Rock beats scissors!")
                playerScore += 1;
            } else if (compChoice === "paper") {
                console.log("You lose! Paper beats rock!");
                computerScore += 1;
            } else {
                console.log("It's a tie!");
            }
        } else if (playerChoice === "paper") {
            if (compChoice === "rock") {
                console.log("You win! Paper beats rock!");
                playerScore += 1;
            } else if (compChoice === "scissors") {
                console.log("You lose! Scissors beats paper!");
                computerScore += 1;
            } else {
                console.log("It's a tie!");
            }
        } else if (playerChoice === "scissors") {
            if (compChoice === "paper") {
                console.log("You win! Scissors beats paper!");
                playerScore += 1;
            } else if (compChoice === "rock") {
                console.log("You lose! Rock beats scissors!");
                computerScore += 1;
            } else {
                console.log("It's a tie!");
            }
        } else {
            console.log("Something went wrong.");
        }
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`)
    }
}

playGame();
