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
    let inputText = prompt("Pick one! [Rock/Paper/Scissors] : ")
    const humanChoice = inputText.toLowerCase()
    return humanChoice
}

function playRound() {
    const choiceArray = ["rock", "paper", "scissors"]
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    if (choiceArray.indexOf(humanChoice) != -1) {
        alert("Invalid Choice, Please Try Again")
    } else {
        let humanChoiceIndex = choiceArray.indexOf(humanChoice)
        let computerChoiceIndex = choiceArray.indexOf(computerChoice)

        if (humanChoiceIndex == computerChoiceIndex) {
            return `It's a tie!, both you and computer picked ${humanChoice}` 
        } else if ((humanChoiceIndex + 1) % choiceArray.length == computerChoiceIndex) {
           return `You lost! you picked ${humanChoice}, while computer picked ${computerChoice}` 
        } else if ((computerChoiceIndex + 1) % choiceArray.length == humanChoiceIndex) {
            return `You won! you picked ${humanChoice}, while computer picked ${computerChoice}`
        }
    }
}