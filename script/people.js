import Pos from './pos.js';

const etc = document.querySelector('.etc');

//calculates the angle of 2 points
function getAngle(x1, y1, x2, y2) {
    let tan = Math.atan2(y2 - y1, x2 - x1);
    let rad = -(tan * 180) / Math.PI;
    return rad
}

//save x,y coordinates
function setPersonPos(x, y) {
    return {
        x, y
    };
}

export default class People extends Pos {
    constructor(count, range) {
        super();
        this.count = count;
        this.people = new Array();  //save current people's x,y coordinates
        this.prePeople = new Array(); //save init peaple's x,y coordinates
        this.posX = 0;
        this.posY = 0;
        this.range = range;
        this.focusOutRange = this.range * 5;
    }

    //make random x,y coordinates and then save the coordinates in the people, prePeople
    init() {
        for (let i = 0; i < this.count; i++) {
            this.RandomPos();
            this.people.push(setPersonPos(this.posX, this.posY));
            this.prePeople.push(setPersonPos(this.posX, this.posY));
            const man = document.createElement('div');
            this.setPos(man, this.posX, this.posY);
            etc.appendChild(man);
        }
    }

    move(x, y) {
        const people = document.querySelectorAll('.etc div');
        for (let i = 0; i < this.count; i++) {
            const manPosX = this.people[i].x;
            const manPosY = this.people[i].y;
            const disX = x - manPosX;
            const disY = y - manPosY;
            const distance = Math.sqrt(Math.abs(disX * disX) + Math.abs(disY * disY));

            //If person falls within the range, move the coordinates out of the range
            if (distance < this.range) {
                people[i].style.transition = `all 200ms linear 0s`;
                const angle = getAngle(x, y, manPosX, manPosY);
                const moveX = (this.range * Math.cos(angle * (Math.PI / 180))) + x;
                const moveY = y - (this.range * Math.sin(angle * (Math.PI / 180)));
                this.people[i] = this.setPos(people[i], moveX, moveY);

            } else if (distance > this.focusOutRange) {
                if (this.people[i].x === this.prePeople[i].x ||
                    this.people[i].y === this.prePeople[i].y) continue;
                const delay = Math.random() * 5;
                people[i].style.transition = `all 1000ms linear ${delay}s`;
                this.people[i] = this.setPos(people[i], this.prePeople[i].x, this.prePeople[i].y);
            }
        }
    }

    remove() {
        if (etc.childElementCount < 2) return;
        etc.innerHTML = "";
        this.people = new Array();
        this.prePeople = new Array();
    }
}