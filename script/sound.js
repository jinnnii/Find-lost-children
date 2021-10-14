'use strict';

const winSound = new Audio('./sound/game_win.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');


export function playWin() {
    playSound(winSound);
}

export function playBackground() {
    playSound(bgSound);
}

export function stopBackground() {
    bgSound.pause();
}

export function playAlert() {
    playSound(alertSound);
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
