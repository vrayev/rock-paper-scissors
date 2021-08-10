cpuScore = 0;
playerScore = 0;

function playRound(playerSelection, computerSelection) {
    return computerSelection;
}

function computerPlay(min, max){
    let selection = Math.round(Math.random() * (max - min) + min);
    if (selection === 1){
        return "rock";
    }else if (selection === 2){
        return "paper";
    }else return "scissors";
}

const playerSelection = "rock";
const computerSelection = computerPlay(1, 3);
console.log(playRound(playerSelection, computerSelection));