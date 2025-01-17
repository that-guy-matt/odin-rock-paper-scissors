let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, getComputerChoice){
    console.log(humanChoice);
    console.log(computerChoice);
}

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3+1);
    switch (compChoice){
        case 1:
            return("rock");
            break;
        case 2:
            return("paper");
            break;
        case 3:
            return("scissors");
            break;
        default:
            return("0");
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Input your choice (Rock, Paper, or Scissors):");
    switch (humanChoice.toLowerCase()){
        case "rock":
            return("rock");
            break;
        case "paper":
            return("paper");
            break;
        case "scissors":
            return("scissors");
            break;
        default:
            alert("Your input must be one of the following: Rock, Paper, or Scissors");
            return getHumanChoice();
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
