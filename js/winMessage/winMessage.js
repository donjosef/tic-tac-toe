const win_message = document.getElementById('win-message');

export function setTextContent(turn, player, combination) {
    if(!combination) { //condition for draw game
        win_message.textContent = `${turn}`;
    } else {
        win_message.textContent = `${turn} ${player} wins with ${combination.join('-')}`;
    }
}

export function resetWinMessage() {
    win_message.textContent = "";
}