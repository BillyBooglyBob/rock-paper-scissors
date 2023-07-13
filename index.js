const options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
const user = document.querySelector('.user-score');
const computer = document.querySelector('.computer-score');

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound() {
    let userChoice = this.className;
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        return;
    } else if (userChoice === "rock" && computerChoice === "scissors"
    || userChoice === "paper" && computerChoice === "rock"
    || userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
    } else {
        computerScore++;
    }

    updateScore();
    checkScore();

}

function updateScore() {
    user.textContent = userScore.toString();
    computer.textContent = computerScore.toString();
}

function checkScore() {
    if (userScore === 5) {
        alert('YOU WON!!!');
        resetScore();
    } else if (computerScore === 5) {
        alert('you lost.')
        resetScore();
    }
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    user.textContent = userScore.toString();
    computer.textContent = computerScore.toString();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))
