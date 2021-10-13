import * as Result from './result.js';
const playBtn = document.querySelector('.play-btn');
const playView = document.querySelector('.play-view');
const timeCounter = document.querySelector('.time-counter');

class Timer {
    constructor(time) {
        this.setTime = time;
        this.time = this.setTime;
        this.state = false; //stopping
    }

    timer() {
        this.time--;
        let min = parseInt(this.time / 60);
        let sec = this.time % 60;
        min = min >= 10 ? min : '0' + min;
        sec = sec >= 10 ? sec : '0' + sec;
        timeCounter.innerHTML = `${min}:${sec}`;

        if (this.time < 0) {
            this.timerInit();
            playBtn.dispatchEvent(new Event('click'));
            Result.lose();
        }
    }

    timerInit() {
        this.time = this.setTime;
        timeCounter.innerHTML = `00:00`;
        this.state = false;
    }

    forceStart() {
        playBtn.dispatchEvent(new Event('click'));
    }

    stateChange() {
        if (this.state) { //true =playing
            this.state = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i>'
            this.timerInit();
            Result.lose();

        } else {  //false= stopping
            this.state = true;
            playBtn.innerHTML = '<i class="fas fa-stop"></i>';
            playView.style.visibility = 'visible';
        }
    }

}

export const timer = new Timer(30);

setInterval(() => {
    if (timer.state) {
        timer.timer();
    }
}, 1000);

//start time out
playBtn.addEventListener('click', () => {
    timer.stateChange();
});