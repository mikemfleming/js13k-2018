import kontra from '../kontra';

import {
	scale,
	normalize,
	getMagnitude,
} from '../utils';

export default class Commit {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: 10,
			y: 10,
			width: 30,
			height: 30,
			color: 'gold',
		});
	}

	update (player) {
		if (this.isTouching(player)) { // how to get x,y of intersect?
			this.sprite.x = player.xMin;
			this.sprite.y = player.yMin;
		}
		this.sprite.update();
	}
	
	render () { this.sprite.render(); }

	// maybe this belongs elsewhere
	isTouching (player) {
		const leftOfPlayer = player.xMin >= this.sprite.x && player.xMin <= this.sprite.x + this.sprite.width;
		const rightOfPlayer = player.xMax >= this.sprite.x && player.xMax <= this.sprite.x + this.sprite.width;
		const topOfPlayer = player.yMin >= this.sprite.y && player.yMin <= this.sprite.y + this.sprite.height;
		const bottomOfPlayer = player.yMax >= this.sprite.y && player.yMax <= this.sprite.y + this.sprite.height;

		const onXaxis = leftOfPlayer || rightOfPlayer;
		const onYaxis = topOfPlayer || bottomOfPlayer;

		return onXaxis && onYaxis;
	}
}

