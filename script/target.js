import Pos from './pos.js';

export default class Target extends Pos {
    constructor() {
        super();
        this.target = document.querySelector('.target');
        this.posX = 0;
        this.posY = 0;
    }

    init() {
        this.RandomPos();
        this.setPos(this.target, this.posX, this.posY);
    }
}
