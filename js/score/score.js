let userScore = Number(localStorage.getItem('userScore'))  || 0;
let computerScore = Number(localStorage.getItem('computerScore')) || 0;
const userScore_span = document.getElementById('score-user');
const computerScore_span = document.getElementById('score-computer');

export function setScore(player) {
    if(player === 'user') {
        userScore += 1;
        localStorage.setItem('userScore', userScore);
    } else if(player === 'computer') {
        computerScore += 1;
        localStorage.setItem('computerScore', computerScore);
    }
}

export function displayScore(player) {
    if(player === 'user') {
        userScore_span.textContent = localStorage.getItem('userScore') || userScore;
    } else if(player === 'computer') {
        computerScore_span.textContent = localStorage.getItem('computerScore') || computerScore;
    }
}

export function scoreInit() {
    displayScore('user');
    displayScore('computer');
}