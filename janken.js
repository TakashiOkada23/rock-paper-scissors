function computerPlay() {
    let hand = ["rock", "paper", "scissors"];
    let random = hand[Math.floor(Math.random()*hand.length)];
    return random;
}

function playGame() {
    let askPlayer = prompt("Rock, Paper or Scissors?");
    let caseInsInput = askPlayer.toLowerCase();
    let computerSelection = computerPlay();
    if (caseInsInput == "rock" && computerSelection == "rock") {
        return "Tie!";
    } else if(caseInsInput == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock!";
    } else if(caseInsInput == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors!";
    } else if(caseInsInput == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock!";
    } else if(caseInsInput == "paper" && computerSelection == "paper") {
        return "Tie!";
    } else if(caseInsInput == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beat Paper!";
    } else if(caseInsInput == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors!";
    } else if(caseInsInput == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat Paper!";
    } else if(caseInsInput == "scissors" && computerSelection == "scissors") {
        return "Tie!";
    } else {
        return "invalid answer"
    }
}

