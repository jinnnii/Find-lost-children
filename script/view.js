'use strict';

import People from './people.js';
import Player from './player.js';
import Target from './target.js';


export default class View {
    constructor(peopleCount, playerRange, playerSpeed) {
        this.people = new People(peopleCount, playerRange);
        this.player = new Player();
        this.target = new Target();
        this.playerSpeed = playerSpeed;
        this.timer = undefined;

        //key press function
        //-> for smooth movement and to press at the same time
        document.addEventListener('keydown', (event) => {
            this.player.keydown[event.keyCode.toString()] = true;
        });
        document.addEventListener('keyup', (event) => {
            this.player.keydown[event.keyCode.toString()] = false;
        });

        this.target.target.addEventListener('click', (event) => { this.onTargetClickListener })
    }

    init() {
        this.people.remove();
        clearInterval(this.timer);
        this.people.init();
        this.player.init();
        this.target.init();
        this.move();
    }
    //keep detecting movement
    move() {
        this.timer = setInterval(() => {
            this.player.move(this.playerSpeed);
            this.people.move(this.player.posX, this.player.posY);
        }, 10);
    }

    onTargetClickListener() {

    }
}
