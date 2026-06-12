let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const message = document.querySelector("#message");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    message.innerText = "It's a Draw!";
};

const showWinner = (userWins, userChoice, computerChoice) => {

    if (userWins) {
        userScore++;
        userScorePara.innerText = userScore;

        message.innerText =
            `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;

        message.innerText =
            `Computer Wins! ${computerChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {

    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
        return;
    }

    let userWins = true;

    if (userChoice === "rock") {
        userWins = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWins = computerChoice === "scissor" ? false : true;
    } else {
        userWins = computerChoice === "rock" ? false : true;
    }

    showWinner(userWins, userChoice, computerChoice);
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });

});