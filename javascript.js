// Computer Choice

// Return a random Number integer between 1 and 3
// Convert number to string rock, paper, or scissors
// If 1 convert to rock, if 2 to paper, if 3 to scissors
// print choice to log

function getComputerChoice() {

   let x = Math.floor(Math.random() * 3 + 1)
   
   if (x == 1) {
    return "ROCK";
   }

   else if (x == 2) {
    return "PAPER";
   }

   else {
    return "SCISSORS";
   }
}

// Human Choice

// prompt the input of rock, paper, or scissors from user
// print user choice to log

function getHumanChoice() {

   return prompt("Rock, Paper, Scissors, Shoot!", "Rock");
}

// Declare Player Scores
 
let humanScore = 0
let computerScore = 0

// Write logic to play a single round of the game

// Call the players choices
// Normalize human input to be case-insensitive
// Name the winner
// Increment scores

function playRound(humanChoice, computerChoice) {
    
    const win = "You win!";
    const loss = "Sorry, you lose!";
    const draw = "It's a draw!";
    
    let result = (humanSelection == 'ROCK' && computerSelection == 'ROCK') ? draw :
        (humanSelection == 'ROCK' && computerSelection == 'PAPER') ? loss :
        (humanSelection == 'ROCK' && computerSelection == 'SCISSORS') ? win :
        (humanSelection == 'PAPER' && computerSelection == 'ROCK') ? win :
        (humanSelection == 'PAPER' && computerSelection == 'PAPER') ? draw :
        (humanSelection == 'PAPER' && computerSelection == 'SCISSORS') ? loss :
        (humanSelection == 'SCISSORS' && computerSelection == 'ROCK') ? loss :
        (humanSelection == 'SCISSORS' && computerSelection == 'PAPER') ? win :
        (humanSelection == 'SCISSORS' && computerSelection == 'SCISSORS') ? draw :
        '' ; 
        
        console.log(result)  
        
        if (result == win) {
            ++humanScore;
        }

        else if (result == loss) {
            ++computerScore;
        }

        console.log(humanScore + ":" + computerScore)
    }
    
    const humanSelectionRaw = getHumanChoice();
    const humanSelection = humanSelectionRaw.toUpperCase();
    const computerSelection = getComputerChoice();
    
playRound(humanSelection, computerSelection);
