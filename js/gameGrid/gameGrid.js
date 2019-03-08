import { getUser, getComputer } from '../playersButtons/playersButtons.js';
import { setTextContent } from '../winMessage/winMessage.js';

const grid = document.getElementById('grid');
const gridButtons = document.querySelectorAll('.grid-btn');
let userMovements = 0;
let computerMovements = 0;
let choices = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
const winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

function isCombinationAvailable(player) {
    for (let combination of winConditions) {
        if (combination.every(cell => choices[cell] === player)) {
            return true;
        }
    }
    return false;
}

function getWinningCombination(player) {
    for (let combination of winConditions) {
        if (combination.every(cell => choices[cell] === player)) {
            return {
                combination,
                player
            };
        }
    }
}    

function computerMovement() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    //If a choice is already selected, try again with recursion until it finds an empty slot 
    if (choices[randomIndex] !== undefined) {
        computerMovement();
    } else {
        const computerCell = document.getElementById(randomIndex);
        let computer = getComputer();
        computerCell.textContent = computer;
        choices[randomIndex] = computer;
        computerMovements++;

        if (computerMovements >= 3) {
            if (isCombinationAvailable(computer)) {
                const { player, combination } = getWinningCombination(computer);
                setTextContent('Computer', player, combination);
            }
        }
    }
}

function game(e) {
    //When click on button of grid, store a reference of id, and check if that cell is empty
    const index = e.target.id;
    const isCellEmpty = e.target.textContent ? false : true;
    if (isCellEmpty) {
        let user = getUser();
        e.target.textContent = user;
        choices[index] = user;
        userMovements++;

        //minimal condition in order that a winning combination exists
        if (userMovements >= 3) {
            if (isCombinationAvailable(user)) {
                const { player, combination } = getWinningCombination(user);
                setTextContent('User', player, combination);
                return; //exit from function since the game is already won
            } else {
                if (!choices.includes(undefined)) { //condition for draw game
                    setTextContent('Draw game!')
                    return; //exit from function since the game is finished avoid to invoke computerMovement with consequent stackOverflow
                }
            }
        }
        setTimeout(computerMovement, 500);
    }
}

export function activateGridButtons() {
    gridButtons.forEach(btn => btn.removeAttribute('disabled'));
}

export function gridButtonsInit() {
    gridButtons.forEach(gridBtn => gridBtn.addEventListener('click', game));
}
