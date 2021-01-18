
    let playerScore = 0;
    let computerScore = 0;
    // const playerSelection = playerChoice();
    // const computerSelection = computerPlay();
   
    //1.When user input "rock, paper or scissor"(case insensitive)
    //the user's input stores in the value of the playerSelection variable.


    function playerChoice() {
      const personInput = prompt("Please enter Rock,Paper or Scissor", '').toLowerCase();
      if (personInput === "rock" || personInput === "paper" || personInput === "scissor") {
        return personInput;
      } else {
        return null;
      }
    }
   
    // console.log(playerSelection);
   //2. computerPlay is a function that generates random "rock, paper or scissor" and store into the variable called computerSelection on top.

    function computerPlay() {
      const randomPc = ["rock", "paper", "scissor"];
      const random = Math.floor(Math.random() * randomPc.length);

      return randomPc[random];

    }
   
    // console.log(computerSelection);

    
    //3. Scores, if player wins, he gets a point, otherwise computer gets a point.
    function playRound (computerSelection ,playerSelection ) {
    
    // when player wins the round
        if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "scissor" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissor") { 
       console.log("Player gets a point")
       return playerScore = playerScore + 1; 
    // when computer wins the round
      } else if (computerSelection === "rock" && playerSelection === "scissor"||computerSelection === "scissor" && playerSelection === "paper"||computerSelection === "paper" && playerSelection === "rock"){
        console.log("Computer gets a point")
        return computerScore = computerScore +1;
    // nothing happens if tie 
      } else if (computerSelection === playerSelection){
        console.log("It's a draw, no one gets a point")
        return playerScore = playerScore + 0;
      }
   
    }
    // five rounds, but this is only for displaying it in console. How do we actually PLAY for 5 rounds. 

      function game(){
        
        for(i = 0; i < 5;i++) {
          playRound(playerChoice(),computerPlay());
        }
    // game() returns a string that will declare the winner of the round.
       if (playerScore < computerScore) {
         console.log('You Lose! computer is the winner!');
       } else if (playerScore > computerScore) {
         console.log('You win! You\'the winner!');
       } else {
         console.log('Tie!');
       }

        console.log('Your score: ' + playerScore, 'Computer Score: ' + computerScore);
      }
      
     game();

