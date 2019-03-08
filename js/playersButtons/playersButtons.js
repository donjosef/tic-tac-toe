import { hideChoosePlayer } from '../choosePlayer/choosePlayer.js';

const playerX = document.getElementById('X');
const playerO = document.getElementById('O');
let user;
let computer;

function deactivatePlayersButtons() {
    playerX.disabled = true;
    playerO.disabled = true;
}

function setPlayer(e) {
    if (e.target.id === 'X') {
        user = 'X';
        computer = 'O';
        playerX.classList.add('btn-primary');
        playerX.classList.remove('btn-secondary');
    } else if (e.target.id === 'O') {
        user = 'O';
        computer = 'X';
        playerO.classList.add('btn-primary');
        playerO.classList.remove('btn-secondary');
    }
}

export function getUser() {
    return user;
}

export function getComputer() {
    return computer;
}

export function playersButtonsInit() {
    //change player to X and computer to O
    playerX.addEventListener('click', (e) => {
        setPlayer(e);
        hideChoosePlayer();
        deactivatePlayersButtons();
    });

    //change player to O and computer to X
    playerO.addEventListener('click', (e) => {
        setPlayer(e);
        hideChoosePlayer();
        deactivatePlayersButtons();
    });
}