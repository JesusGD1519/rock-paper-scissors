function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100) % 3;

  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
}

function getHumanChoice() {
  return prompt('choose: rock, paper, or scissors');
}

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(humanChoice + ' ' + computerChoice);

    switch (true) {
      case (humanChoice === "rock" && computerChoice === "rock"):
        console.log('You tied! Both players chose Rock');
        break;
      case (humanChoice === "rock" && computerChoice == "paper"):
        console.log('You lost! Paper beats Rock');
        computerScore += 1;
        break;
      case (humanChoice === "rock" && computerChoice == "scissors"):
        console.log('You won! Rock beats Scissors');
        humanScore += 1;
        break;
      case (humanChoice === "paper" && computerChoice == "paper"):
        console.log('You tied! Both players chose Paper');
        break;
      case (humanChoice === "paper" && computerChoice == "rock"):
        console.log('You won! Paper beats Rock');
        humanScore += 1;
        break;
      case (humanChoice === "paper" && computerChoice == "scissors"):
        console.log('You lost! Scissors beats Paper');
        computerScore += 1;
        break;
      case (humanChoice === "scissors" && computerChoice == "scissors"):
        console.log('You tied! Both players chose scissors');
        break;
      case (humanChoice === "scissors" && computerChoice == "paper"):
        console.log('You won! Scissors beats Paper');
        humanScore += 1;
        break;
      case (humanChoice === "scissors" && computerChoice == "rock"):
        console.log('You lost! Rock beats Scissors');
        computerScore += 1;
        break;
      default:
        console.log('Cases are not ran');
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You won! Your score was ${humanScore} and the computer score was ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost! Your score was ${humanScore} and the computer score was ${computerScore}`);
  } else {
    console.log(`You and the computer tied! The scores were (${humanScore}, ${computerScore})`)
  }
}

playGame();
