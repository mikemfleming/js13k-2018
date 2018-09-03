import kontra from './kontra';

import Player from './actors/player';
import Cat from './actors/cat';
import Commit from './actors/commit';
import Github from './actors/github';

const player = new Player({ x: 250, y: 730 });
const cat = new Cat({ x: 250, y: 375 });
const commit = new Commit();
const github = new Github();

const loop = kontra.gameLoop({
	update () {
		player.update();
		const { playerX, playerY } = player.getCenter();
		const playerDimensions = player.getDimensions();

		if (player.isCoding()) {
			commit.update(playerDimensions);
		}
		
		if (commit.isPushed() && !player.isCoding()) {
			console.log('pushin!')
			//	count it towards the score
			//  generate a new commit
		}

		cat.update({ playerX, playerY });
		github.update();
	},

	// paint the new world
	render () {
		github.render();
		commit.render();
		player.render();	
		cat.render();	
			
	},
});

loop.start();

