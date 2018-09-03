import kontra from './kontra';

import Player from './actors/player';
import Cat from './actors/cat';
import Commit from './actors/commit';

const player = new Player({ x: 250, y: 730 });
const cat = new Cat({ x: 250, y: 375 });
const commit = new Commit();

const loop = kontra.gameLoop({
	update () {
		player.update();
		const { playerX, playerY } = player.getCenter();
		const playerDimensions = player.getDimensions();
		if (player.isCoding()) {
			commit.update(playerDimensions);
		}
		cat.update({ playerX, playerY });
	},

	// paint the new world
	render () {
		commit.render();
		player.render();	
		cat.render();	
	},
});

loop.start();

