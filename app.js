let cpuScore = 0;
let playerScore = 0;

const rock = 1;
const paper = 2;
const scissors = 3;
computerPlay(1, 3);

function computerPlay(min, max){
    let selection = Math.round(Math.random() * (max - min) + min);
    if (selection === rock){
        return computerSelection = 1;
    }else if (selection === paper){
        return computerSelection = 2;
    }else return computerSelection = 3;
}

 function playerChoice(choice) {
     console.log(choice), console.log(computerSelection);
    if (choice === "rock"){
     if (computerSelection === paper) {
         console.log("Computer chose Paper, You Lose!");
     } else if (computerSelection === scissors){
         console.log("Computer chose Scissors, You Win!");
     } else console.log("You both chose Rock! It's a tie!");

    }else if (choice === "paper"){
     if (computerSelection === rock) {
         console.log("Computer chose Rock, You Win!"); 
     } else if (computerSelection === scissors){
         console.log("Computer chose Scissors, You Lose!"); 
     } else console.log("You both chose Paper! It's a tie!");
       
    }else 
     if (computerSelection === rock) {
        console.log("Computer chose Rock, You lose!");
     } else if (computerSelection === paper){
        console.log("Computer chose Paper, You win!");
     } else console.log("You both chose Scissors! It's a tie!");
}

