import kontra from '../kontra';

import {
	MAX_HEIGHT,
	MAX_WIDTH,
} from '../constants';

export default class Github {
	constructor (props) {
		this.sprite = kontra.sprite({
			x: MAX_WIDTH * 0.5 - 150 * 0.5,
			y: MAX_HEIGHT - 100,
			width: 150,
			height: 100,
			color: '#92f442',
		});
	}

	update () { this.sprite.update(); }
	
	render () { this.sprite.render(); }
}

