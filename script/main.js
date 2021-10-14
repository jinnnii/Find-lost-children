'use strick';

//import * as Init from './init.js';
//import * as Move from './move.js';
//import * as Timer from './timer.js';
//import * as FindPet from './find-pet.js';
import Result from './result.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

//게임화면 생성
const game = new GameBuilder()
    .gameDuration(30)
    .peopleCount(200)
    .playerRange(100)
    .playerSpeed(2)
    .build();

//게임 결과 팝업창
const gameFinishResult = new Result();

//게임 결과 출력
game.setGameStopListener(reason => {
    let message;
    switch (reason) {
        case Reason.win:
            message = "Sweety! Come here!!"
            sound.playWin();
            break;
        case Reason.lose:
            message = "OMG... Where are you?"
            sound.playAlert();
            break;
        case Reason.cancel:
            message = "Are you going to throw away?"
            sound.playAlert();
            break;
        default:
            throw new Error('not valid reason');
            break;
    }
    gameFinishResult.showWithText(message);
});


//다시 시작
gameFinishResult.setClickListener(() => {
    game.start();
})