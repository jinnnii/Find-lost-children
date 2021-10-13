import { people, player } from './init.js';

const speed = 2;

//keep detecting movement
export default setInterval(() => {
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
