let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, getComputerChoice){
    console.log(humanChoice);
    console.log(computerChoice);
}

function getComputerChoice(){
    return(Math.floor(Math.random()*3+1));
}

function getHumanChoice() {
    return(prompt("Input your choice: 1: Rock, 2: Paper, 3: Scissors"));
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
