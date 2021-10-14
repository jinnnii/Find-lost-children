'use strict';

import View from './view.js';
import * as sound from './sound.js';

export class GameBuilder {
    gameDuration(duration) {
        this.gameDuration = duration;
        return this;
    }
    peopleCount(num) {
        this.peopleCount = num;
        return this;
    }
    playerRange(range) {
        this.playerRange = range;
        return this;
    }

    playerSpeed(speed) {
        this.playerSpeed = speed;
        return this;
    }
    build() {
        return new Game(
            this.gameDuration,//
            this.peopleCount,
            this.playerRange,
            this.playerSpeed
        );
    }
}

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
});

class Game {
    constructor(gameDuration, peopleCount, playerRange, playerSpeed) {
        this.gameDuration = gameDuration;
        this.peopleCount = peopleCount;
        this.playerRange = playerRange;
        this.playerSpeed = playerSpeed;

        this.view = new View(this.peopleCount, this.playerRange, this.playerSpeed);

        this.playView = document.querySelector('.play-view');
        this.playBtn = document.querySelector('.play-btn');
        this.timeCounter = document.querySelector('.time-counter');
        this.target = document.querySelector('.target');
        this.playBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop(Reason.cancel);
            } else {
                this.start();
            }
        });

        this.view.target.target.addEventListener('click', () => { this.onTargetClick() })

        this.started = false;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    start() {
        this.started = true;
        this.initGame();
        this.startGameTimer();
        this.showStopButton();
        sound.playBackground();
        this.playView.style.visibility = 'visible';
        this.disabledButton(false);
    }

    stop(reason) {
        this.started = false;
        this.stopGameTimer();
        this.showPlayButton();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(reason);
        this.disabledButton(true);
    }

    initGame() {
        this.view.init();
    }

    onTargetClick() {
        this.stop(Reason.win);
    }

    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);

        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                clearInterval(this.timer);

                if (this.started) {
                    this.stop(Reason.lose)
                }

                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }

    stopGameTimer() {
        clearInterval(this.timer);
    }

    showPlayButton() {
        const icon = this.playBtn.querySelector('.fas');
        icon.classList.remove('fa-stop');
    }

    showStopButton() {
        const icon = this.playBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
    }

    updateTimerText(time) {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        min = min >= 10 ? min : '0' + min;
        sec = sec >= 10 ? sec : '0' + sec;
        this.timeCounter.innerHTML = `${min}:${sec}`;
    }

    disabledButton(bool) {
        document.querySelector('.play-btn').disabled = bool;
        document.querySelector('.target').disabled = bool;
    }
}