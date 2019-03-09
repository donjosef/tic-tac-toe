import {activatePlayersButtons, resetPlayers} from '../playersButtons/playersButtons.js';
import {showChoosePlayer} from '../choosePlayer/choosePlayer.js';
import {resetGridButtons, resetChoices, resetMovements} from '../gameGrid/gameGrid.js';
import {resetWinMessage} from '../winMessage/winMessage.js';


const resetBtn = document.getElementById('restart');

function resetGame() {
    resetPlayers();
    activatePlayersButtons();
    showChoosePlayer();
    resetGridButtons();
    resetMovements();
    resetChoices();
    resetWinMessage();
}

export function resetInit() {
    resetBtn.addEventListener('click', resetGame);
}
