// Computer Choice

// Return a random Number integer between 1 and 3
// Convert number to string rock, paper, or scissors
// If 1 convert to rock, if 2 to paper, if 3 to scissors
// print choice to log

function getComputerChoice() {

   let x = Math.floor(Math.random() * 3 + 1)
   
   if (x == 1) {
    console.log("Rock");
   }

   else if (x == 2) {
    console.log("Paper");
   }

   else {
    console.log("Scissors");
   }
}

// Human Choice

// prompt the input of rock, paper, or scissors from user
// print user choice to log

function getHumanChoice() {

   return prompt("Rock, Paper, Scissors, Shoot!", "Rock");
}