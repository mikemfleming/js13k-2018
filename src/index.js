import kontra from './kontra';

import Player from './actors/player';
import Cat from './actors/cat';
import Commit from './actors/commit';
import Github from './actors/github';

const player = new Player({ x: 250, y: 730 });
const cat = new Cat({ x: 250, y: 375 });
let commit = new Commit();
const github = new Github();

const scoreboard = document.createElement('div');
const scoreText = document.createElement('span');
let score = 0;
scoreText.innerText = score;
scoreboard.appendChild(scoreText);
document.body.appendChild(scoreboard);


const loop = kontra.gameLoop({
	update () {
		if (scoreText.innerHTML != score) {
			scoreText.innerText = score;
		}

		player.update();
		const { playerX, playerY } = player.getCenter();
		const playerDimensions = player.getDimensions();

		// if grabbed, 
		//	move the commit with the player
		if (player.isCoding()) {
			commit.update(playerDimensions);
		}
		
		// if player let goes of grab in github,
		//	count it towards the score
		//	generate a new commit
		if (commit.isPushed() && !player.isCoding()) {
			score++;
			commit = new Commit();
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

