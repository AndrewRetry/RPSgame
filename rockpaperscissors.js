let userScore = 0
let computerScore = 0
let gameRound = 0
const listOutcome = document.querySelector("ol")

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice) {
    const choiceArray = ["rock", "paper", "scissors"]
    
    let computerChoice = getComputerChoice()
    if (choiceArray.indexOf(humanChoice) === -1) {
        console.log("Invalid Choice, Please Try Again")
        
    } else {
        let humanChoiceIndex = choiceArray.indexOf(humanChoice)
        let computerChoiceIndex = choiceArray.indexOf(computerChoice)

        if (humanChoiceIndex == computerChoiceIndex) {
            gameRound += 1
            
            return `It's a tie!, both you and computer picked ${humanChoice}`
        } else if ((humanChoiceIndex + 1) % choiceArray.length == computerChoiceIndex) {
            computerScore += 1
            gameRound += 1
            
            return `You lost! you picked ${humanChoice}, while computer picked ${computerChoice}`

        } else if ((computerChoiceIndex + 1) % choiceArray.length == humanChoiceIndex) {
            userScore += 1
            gameRound += 1

            return `You won! you picked ${humanChoice}, while computer picked ${computerChoice}`
        }
    }
}

const results = document.querySelector("#results")
const buttons = document.querySelectorAll("#buttons button");
const [btnRock, btnPaper, btnScissors] = buttons;

btnRock.addEventListener("click", () => {
    const roundOutcome = document.createElement("li");
    roundOutcome.textContent = playRound("rock");
    listOutcome.appendChild(roundOutcome);
    updateScores();
})

btnPaper.addEventListener("click", () => {
    const roundOutcome = document.createElement("li");
    roundOutcome.textContent = playRound("paper");
    listOutcome.appendChild(roundOutcome);
    updateScores();
})

btnScissors.addEventListener("click", () => {
    const roundOutcome = document.createElement("li");
    roundOutcome.textContent = playRound("scissors");
    listOutcome.appendChild(roundOutcome);
    updateScores();
})

const btnStart = document.querySelector("#btnStart");
const overallResults = document.querySelector("#overallResults");


const updateScores = () => {
    if (gameRound % 5 == 0 && gameRound > 0) {
        if (userScore > computerScore) {
            document.querySelector("#overallResults").textContent = "You Win!"
        } else if (userScore < computerScore) {
            document.querySelector("#overallResults").textContent = "You Lose!"
        } else {
            document.querySelector("#overallResults").textContent = "It's a tie!"
        }
        btnStart.style.display = "block"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    let resultString = `User Score : ${userScore}\tComputer Score : ${computerScore}`
    results.textContent = resultString
}

btnStart.addEventListener("click", () => {
    btnStart.style.display = "none"
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    gameRound = 0;
    userScore = 0;
    computerScore = 0;
    results.textContent = "Game started! Choose your move.";
    overallResults.textContent = "";
    listOutcome.textContent = "";
})