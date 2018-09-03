import kontra from '../kontra';

export default class Cat {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 40,
			height: 40,
			color: 'black',
			dx: 0,
			dy: 0,
		});

		this.speed = 200; // px per second (ish)
	}

	update ({ playerX, playerY }) {
		// Get the difference in position from Cat to Mouse. (I.e. the vector to add to Cat to get to Mouse)
		const deltaPos = kontra.vector(playerX - this.sprite.x, playerY - this.sprite.y);
		// Get the normalized direction from Cat to Mouse. (I.e. the vector pointint from Cat to Mouse with a magnitude of zero)
		const direction = normalize(deltaPos.x, deltaPos.y);
		// Convert the speed of the cat from px/sec to px/frame. 
		const s = this.speed / 60;
		// Calculate the 2D velocity of the Cat, using the normalized direction and the speed of the cat.
		let vel = scale(direction.x, direction.y, s);

		// Clamp the magnitude of the velocity so it is not greater than the distance of Cat to Mouse
		if (getMagnitude(vel.x, vel.y) > getMagnitude(deltaPos.x, deltaPos.y))
		{
			vel = deltaPos;
		}

		// Apply the velocity to the Sprite.
		this.sprite.dx = vel.x;
		this.sprite.dy = vel.y;

		this.sprite.update();
	}
	
	render () { this.sprite.render(); }
}

function scale (x, y, s) {
    return kontra.vector(x * s, y *s);
}

function normalize (x, y) {
    const magnitude = getMagnitude(x, y);
	if (magnitude == 0) {
		return kontra.vector(0,0);
	}
  return kontra.vector(x / magnitude, y / magnitude)
}

function getMagnitude (x, y) {
    return Math.sqrt((x * x) + (y * y));
}
