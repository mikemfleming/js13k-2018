import kontra from '../kontra'
import { keepInArena, handlePlayerMovement } from '../utils';

export default class Player {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: props.x,
			y: props.y,
			width: 20,
			height: 20,
			color: 'blue'
		});
	}

	update () {
		handlePlayerMovement(this.sprite);
		keepInArena(this.sprite);
		this.sprite.update();
	}
	
	render () { this.sprite.render(); }
}
