import Pos from './pos.js';

export default class Player extends Pos {
    constructor() {
        super();
        this.player = document.querySelector('.player');
        this.posX = (this.viewWidth / 2) - this.manWidth;
        this.posY = (this.viewHeight / 2) - this.manHeight;
        this.keydown = {};
    }

    //center position
    init() {
        this.setPos(this.player, this.posX, this.posY);
    }

    //press the 'asdw' key to move the coordinates
    move(speed) {
        if (this.keydown['65']) this.posX -= speed;
        if (this.keydown['68']) this.posX += speed;
        if (this.keydown['87']) this.posY -= speed;
        if (this.keydown['83']) this.posY += speed;

        const pos = this.setPos(this.player, this.posX, this.posY);
        this.posX = pos.x;
        this.posY = pos.y;
    }
}
