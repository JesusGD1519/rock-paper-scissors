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

// function getHumanChoice() {
//   return prompt('choose: rock, paper, or scissors');
// }

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (true) {
      case (humanChoice === "rock" && computerChoice === "rock"):
        choices.textContent = 'You tied! Both players chose Rock';
        break;
      case (humanChoice === "rock" && computerChoice == "paper"):
        choices.textContent = 'You lost! Paper beats Rock';
        computerScore += 1;
        break;
      case (humanChoice === "rock" && computerChoice == "scissors"):
        choices.textContent = 'You won! Rock beats Scissors';
        humanScore += 1;
        break;
      case (humanChoice === "paper" && computerChoice == "paper"):
        choices.textContent = 'You tied! Both players chose Paper';
        break;
      case (humanChoice === "paper" && computerChoice == "rock"):
        choices.textContent = 'You won! Paper beats Rock';
        humanScore += 1;
        break;
      case (humanChoice === "paper" && computerChoice == "scissors"):
        choices.textContent = 'You lost! Scissors beats Paper';
        computerScore += 1;
        break;
      case (humanChoice === "scissors" && computerChoice == "scissors"):
        choices.textContent = 'You tied! Both players chose scissors';
        break;
      case (humanChoice === "scissors" && computerChoice == "paper"):
        choices.textContent = 'You won! Scissors beats Paper';
        humanScore += 1;
        break;
      case (humanChoice === "scissors" && computerChoice == "rock"):
        choices.textContent = 'You lost! Rock beats Scissors';
        computerScore += 1;
        break;
    }
  }

  const scoreContainer = document.createElement("div");
  document.body.appendChild(scoreContainer);

  const scoreHeading = document.createElement("h1");
  scoreHeading.textContent = "Rock Paper Scissors";
  scoreContainer.appendChild(scoreHeading);

  const scoreBoard = document.createElement("h3");
  scoreBoard.textContent = `${humanScore} - ${computerScore} `;
  scoreContainer.appendChild(scoreBoard);

  scoreContainer.setAttribute(
    "style",
    "display : flex; flex-direction : column; text-align : center; margin : 0px 0px 1.5rem 0px;"
  );

  scoreHeading.setAttribute("style", "margin : 10px 0px;")
  scoreBoard.setAttribute("style", "margin : 10px")

  const choiceContainer = document.createElement("div");
  document.body.appendChild(choiceContainer)

  const rock = document.createElement("button");
  rock.setAttribute("id", "rock");
  const rockIcon = document.createElement("img");
  rockIcon.style["transform"] = "rotate(90deg)";
  rockIcon.setAttribute("src", "images/rock.svg");
  rock.appendChild(rockIcon);

  choiceContainer.appendChild(rock);

  const paper = document.createElement("button");
  paper.setAttribute("id", "paper");
  const paperIcon = document.createElement("img");
  paperIcon.setAttribute("src", "images/paper.svg");
  paper.appendChild(paperIcon);

  choiceContainer.appendChild(paper);

  const scissors = document.createElement("button");
  scissors.setAttribute("id", "scissors");
  const scissorsIcon = document.createElement("img");
  scissorsIcon.setAttribute("src", "images/scissors.svg");
  scissors.appendChild(scissorsIcon);

  choiceContainer.appendChild(scissors);

  choiceContainer.setAttribute("style", "display : flex; gap : 2rem; margin-bottom : 1.5rem");

  const buttons = document.querySelectorAll("button");
  const choices = document.createElement("p");
  document.body.appendChild(choices);
  
  document.body.setAttribute("style", "height : 100vh; margin : 0px; display : flex; flex-direction : column; align-items : center; justify-content: center; background-color : #858066");


  buttons.forEach ((button) => {
    button.setAttribute("style", "border : none; padding : 0px; width : 7rem; border-radius : 1rem");

    button.addEventListener("click", () => {
      choices.textContent = "";
      playRound(button.getAttribute("id"), getComputerChoice());
      scoreBoard.textContent = `${humanScore} - ${computerScore} `;
      if(humanScore === 5) {
        alert("You win!");
        humanScore = 0;
        computerScore = 0
        return;
      } else if (computerScore === 5) {
        alert("You lose!")
        computerScore = 0;
        humanScore = 0
        return;
      }
    });
  });
}

playGame();