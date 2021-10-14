'use strict';

//import { init } from './init.js';
//import { timer } from './timer.js';

export default class Result {
    constructor() {
        this.result = document.querySelector('.play-result')
        this.text = document.querySelector('.play-result p');
        this.btn = document.querySelector('.play-result button');
        this.btn.addEventListener('click', () => {
            this.hide();
            this.onClick && this.onClick();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.text.innerHTML = text;
        this.result.style.display = 'flex';
    }
    hide() {
        this.result.style.display = 'none';
    }

}


/*export function lose() {
    result.style.display = 'flex';
    text.innerHTML = `I lost my pet Forever`;
    timer.timerInit();
    document.querySelector('.play-btn').disabled = true;
    document.querySelector('.target').disabled = true;
    loseAudio.play();
}

export function win() {
    result.style.display = 'flex';
    text.innerHTML = `Finally, I found my pet!🖤`
    timer.timerInit();
    document.querySelector('.play-btn').disabled = true;
    document.querySelector('.target').disabled = true;
    winAudio.play();
}

function restart() {
    result.style.display = 'none';
    timer.forceStart();
    init();
    document.querySelector('.play-btn').disabled = false;
    document.querySelector('.target').disabled = false;
}
btn.addEventListener('click', () => {
    restart();
})*/