// Computer Choice

// Return a random Number integer between 1 and 3
// Convert number to string rock, paper, or scissors
// If 1 convert to rock, if 2 to paper, if 3 to scissors

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

// Declare Player Scores
 
let playerScore = 0
let computerScore = 0

// Write logic to play a single round of the game

// Call the players choices
// Name the winner
// Increment scores

    function playRound(playerChoice) {
        
        const humanSelection = playerChoice;
        const computerSelection = getComputerChoice();

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
        
    switch(result) {
        case win:
            playerScore++;
            break;
        case loss:
            computerScore++;
            break;      
    }
         thrownHands.textContent = `${humanSelection} vs ${computerSelection} -- ${result}`

    if (playerScore === 5) {
        alert("You won, congratulations!");
        thrownHands.textContent = "Player vs Computer -- Who wins?";
        playerScore = 0;
        computerScore = 0;
        
    } else if (computerScore === 5) {
        alert("You lost, better luck next time!");
        thrownHands.textContent = "Player vs Computer -- Who wins?";
        playerScore = 0;
        computerScore = 0;
        
    }
        scoreDisplay.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
       
    }
    

// UI DOM Manipulation

const playerSelection = document.querySelector("#player-selections");
playerSelection.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('ROCK');
            break;
        case 'paper':
            playRound('PAPER');
            break;
        case 'scissors':
            playRound('SCISSORS');
            break;        
    }
})

const resultsUi = document.querySelector("#results");
const thrownHands = document.querySelector("#currentHands");
const scoreDisplay = document.createElement("p"); 
scoreDisplay.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`
resultsUi.appendChild(scoreDisplay);