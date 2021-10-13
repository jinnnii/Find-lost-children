import People from './people.js';
import Player from './player.js';
import Target from './target.js';

export { people, player, target };

const people = new People(200);
const player = new Player();
const target = new Target();

//init, comes up on the screen at first
export function init() {
    people.remove();
    people.init();
    player.init();
    target.init();
}
init();

