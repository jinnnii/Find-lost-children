import * as Result from './result.js';

//start time out
const playBtn = document.querySelector('.play-btn');
const timeCounter = document.querySelector('.time-counter');

const setTime = 3;
let time = setTime;

function timer() {
    time--;
    let min = parseInt(time / 60);
    let sec = time % 60;
    min = min >= 10 ? min : '0' + min;
    sec = sec >= 10 ? sec : '0' + sec;
    timeCounter.innerHTML = `${min}:${sec}`;

    if (time < 0) {
        time = setTime;
        timeCounter.innerHTML = `00:00`;
        playBtn.dispatchEvent(new Event('click'));
        //window.alert("time out");
        Result.lose();
    }
}

export default setInterval(() => {
    if (playBtn.classList.contains('play')) {
    } else if (playBtn.classList.contains('stop')) {
        timer();
    }
}, 1000);

//start time out
playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('stop');
    playBtn.classList.toggle('play');

    if (playBtn.classList.contains('play')) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
    } else if (playBtn.classList.contains('stop')) {
        playBtn.innerHTML = '<i class="fas fa-stop"></i>';
    }
});
