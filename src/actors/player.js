import kontra from '../kontra'
import { keepInArena, getNewVectorP } from '../utils';

export default class Player {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 20,
			height: 20,
			color: 'blue'
		});

		this.speed = 250;
	}

	update () {
		const currentPosition = kontra.vector(0, 0);
		const deltaPos = getNewVectorP(currentPosition);
		const direction = normalize(deltaPos.x, deltaPos.y);
		const s = this.speed / 60;
		let vel = scale(direction.x, direction.y, s);
		
		this.sprite.dx = vel.x;
		this.sprite.dy = vel.y;

		keepInArena(this.sprite);
		this.sprite.update();
	}
	
	render () { this.sprite.render(); }

	getCenter () {
		return {
			playerX: this.sprite.x - this.sprite.width * 0.5,
			playerY: this.sprite.y - this.sprite.height * 0.5,
		}
	}
}

function normalize (x, y) {
	const magnitude = getMagnitude(x, y);
	return kontra.vector(x / magnitude, y / magnitude)
}

function scale (x, y, s) {
	return kontra.vector(x * s, y *s);
}

function getMagnitude (x, y) {
	return Math.sqrt((x * x) + (y * y));
}