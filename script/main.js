import People from './people.js';
import Player from './player.js';
import Target from './target.js';

const people = new People(200);
const player = new Player();
const target = new Target();
const speed = 2;

//init, comes up on the screen at first
function init() {
    people.init();
    player.init();
    target.init();
}
init();

//keep detecting movement
setInterval(() => {
    player.move(speed);
    people.move(player.posX, player.posY);
}, 10);

//key press function
//-> for smooth movement and to press at the same time
document.addEventListener('keydown', (event) => {
    player.keydown[event.keyCode.toString()] = true;
});
document.addEventListener('keyup', (event) => {
    player.keydown[event.keyCode.toString()] = false;
});