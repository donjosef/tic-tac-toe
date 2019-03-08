let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('score-user');
const computerScore_span = document.getElementById('score-computer');

export function setScore(player) {
    if(player === 'user') {
        userScore += 1;
    } else if(player === 'computer') {
        computerScore += 1;
    }
}

export function displayScore(player) {
    if(player === 'user') {
        userScore_span.textContent = userScore;
    } else if(player === 'computer') {
        computerScore_span.textContent = computerScore;
    }
}

export function scoreInit() {
    displayScore('user');
    displayScore('computer');
}