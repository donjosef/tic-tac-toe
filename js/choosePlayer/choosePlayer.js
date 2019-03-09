const choosePlayer = document.querySelector('.choose-player-prompt');

export function hideChoosePlayer() {
    choosePlayer.classList.add('hide');
}

export function showChoosePlayer() {
    choosePlayer.classList.remove('hide');
}
