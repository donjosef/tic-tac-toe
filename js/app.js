import {playersButtonsInit} from './playersButtons/playersButtons.js';
import {gridButtonsInit} from './gameGrid/gameGrid.js';
import {scoreInit} from './score/score.js';


document.addEventListener('DOMContentLoaded', () => {
    playersButtonsInit();
    gridButtonsInit();
    scoreInit();
});