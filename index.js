const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("What is your move? ");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        getUserChoice();
    }
}     

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "won";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "won";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "won";
    } else {
        return "lost";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let wonMessage = "You won";
    let lostMessage = "You lost";
    let computerChoice; 
    let userChoice;
    let outcome;

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice(); 
        userChoice = getUserChoice();
        outcome = playRound(userChoice, computerChoice)
        switch (outcome) {
            case "won":
                userScore++;
                break;

            case "lost":
                computerScore++;
                break;

            default:
                break;
        }
    }

    if (userScore > computerScore) {
        console.log("You won!!!");
    } else if (userScore < computerScore) {
        console.log("You lost. Try again.");
    } else {
        console.log("It's a draw.");
    }
}