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
    let inputText = prompt("Rock/Paper/Scissors : ")
    const humanChoice = inputText.toLowerCase()
    return humanChoice
}