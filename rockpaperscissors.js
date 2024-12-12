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

function getHumanChoice() {
    let inputText = prompt("Pick one! [Rock/Paper/Scissors] : ").toLowerCase()
    return inputText
}

function playRound() {
    const choiceArray = ["rock", "paper", "scissors"]
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    if (choiceArray.indexOf(humanChoice) === -1) {
        console.log("Invalid Choice, Please Try Again")
        return 0
    } else {
        let humanChoiceIndex = choiceArray.indexOf(humanChoice)
        let computerChoiceIndex = choiceArray.indexOf(computerChoice)

        if (humanChoiceIndex == computerChoiceIndex) {
            console.log(`It's a tie!, both you and computer picked ${humanChoice}` )
            return 1 
        } else if ((humanChoiceIndex + 1) % choiceArray.length == computerChoiceIndex) {
            console.log(`You lost! you picked ${humanChoice}, while computer picked ${computerChoice}`)
            return 2
        } else if ((computerChoiceIndex + 1) % choiceArray.length == humanChoiceIndex) {
            console.log(`You won! you picked ${humanChoice}, while computer picked ${computerChoice}`)
            return 3
        }
    }
}

function playGame() {
    for (let index = 0; index < 5;) {
        let gameOutcome = playRound()
        if (gameOutcome) {
            if (gameOutcome == 1) {
            userScore += 1
            computerScore += 1
            } else if (gameOutcome == 2) {
            computerScore += 1
            } else if (gameOutcome == 3) {
            userScore += 1
            } 
            index += 1
        }
    }
}

let userScore = 0
let computerScore = 0
let userPrompt = prompt("Do you want to play Rock-Paper-Scissors? (5 Game Set) [Y/N] : ").toLowerCase()

while (true) {
    if (!(userPrompt == "y" || userPrompt == "n")) {
        userPrompt = prompt("Do you want to play Rock-Paper-Scissors? (5 Game Set) [Y/N] : ").toLowerCase()
    } else if (userPrompt == "y") {
        playGame()
        console.log(`Current Standings - User: ${userScore} - Computer: ${computerScore}`)
        userPrompt = prompt("Do you want to play again? (5 Game Set) [Y/N] : ").toLowerCase()
    } else if (userPrompt == "n") {
        break
    }
}

console.log("Bye!")
