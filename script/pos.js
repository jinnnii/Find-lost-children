const playView = document.querySelector('.play-view');
const etcMan = document.querySelector('.etc img');

const playViewRect = playView.getBoundingClientRect();
const MAN_SIZE = 128;

export default class Pos {
    constructor() {
        this.posX = 0;
        this.posY = 0;
        this.viewTop = playViewRect.top;
        this.viewLeft = playViewRect.left;
        this.viewWidth = playViewRect.width;
        this.viewHeight = playViewRect.height;
        this.manWidth = MAN_SIZE / 2;
        this.manHeight = MAN_SIZE / 2;
    }

    RandomPos() {
        this.posX = (Math.random() * this.viewWidth) - this.manWidth;
        this.posY = (Math.random() * this.viewHeight) - this.manHeight;
    }

    setPos(target, posX, posY) {
        if (posX < 0) posX = 0;
        if (posX > this.viewWidth) posX = this.viewWidth;
        if (posY < 0) posY = 0;
        if (posY > this.viewHeight) posY = this.viewHeight;

        target.style.transform = `translate(${posX}px,${posY}px)`;
        target.style.zIndex = parseInt(posY);

        return { x: posX, y: posY };
    }
}