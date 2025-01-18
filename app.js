let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, compChoice){
    console.log(`Player chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
    if(humanChoice === "rock") {
        if(compChoice === "scissors"){
            console.log("You win! Rock beats scissors!")
            humanScore+=1;
        } else if(compChoice === "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore+=1;
        } else {
            console.log("It's a tie!");
        }
    } else if(humanChoice === "paper"){
        if(compChoice === "rock"){
            console.log("You win! Paper beats rock!");
            humanScore+=1;
        } else if(compChoice === "scissors"){
            console.log("You lose! Scissors beats paper!");
            computerScore+=1;
        } else {
            console.log("It's a tie!");
        } 
    } else if(humanChoice === "scissors"){
        if(compChoice === "paper"){
            console.log("You win! Scissors beats paper!");
            humanScore+=1;
        } else if(compChoice === "rock"){
            console.log("You lose! Rock beats scissors!");
            computerScore+=1;
        } else {
            console.log("It's a tie!");
        }
    } else {
        console.log("Something went wrong.");
    }
    console.log(`Player score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`)
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
