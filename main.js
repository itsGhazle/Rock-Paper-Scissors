const choices = ["rock", "scissors", "paper"];
let humanScore = 0;
let computerScore = 0;
for (let i = 1; i < 5; i++) {
  // playing game and keep track of scores
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("hhh");
      console.log(` ${humanChoice} beats ${computerChoice}`);
    } else if (
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log(`${computerChoice} beats ${humanChoice}`);
    } else {
      console.log(`${computerChoice} and ${humanChoice} are the same!`);
    }
    console.log(humanChoice, computerChoice);
  }

  function playGame() {
    playRound(humanSelection, computerSelection);
    console.log(humanScore, computerScore);

    if (humanScore == computerScore) {
      console.log(`It is a tie!`);
    } else if (humanScore > computerScore) {
      console.log(
        `Your score is ${humanScore} and computer is ${computerScore} . You won!`
      );
    } else if (humanScore < computerScore) {
      console.log(
        `Your score is ${humanScore} and computer is ${computerScore} . computer won! `
      );
    } else {
      console.log("It is a tie");
    }
  }

  // Get computer choice
  let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  };
  //Get human choice
  let getHumanChoice = () => {
    let answer = String(prompt("please enter your choice").toLowerCase());
    return answer;
  };
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playGame();
}
