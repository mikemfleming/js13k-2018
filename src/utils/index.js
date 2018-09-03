import kontra from '../kontra';

import {
	MIN_WIDTH,
	MIN_HEIGHT,
	MAX_WIDTH,
	MAX_HEIGHT,
} from '../constants';

// might be possible to do this with clamp
export const keepInArena = sprite => {
	if (sprite.x <= MIN_WIDTH) {
		sprite.x = MIN_WIDTH;
	}

	if (sprite.x >= MAX_WIDTH - sprite.width) {
		sprite.x = MAX_WIDTH - sprite.width;
	}

	if (sprite.y <= MIN_HEIGHT) {
		sprite.y = MIN_HEIGHT;
	}

	if (sprite.y >= MAX_HEIGHT - sprite.height) {
		sprite.y = MAX_HEIGHT - sprite.height;
	}
};

export const getNewVectorP = vector => {
	if (kontra.keys.pressed('left')){
		vector.add(kontra.vector(-100, 0));
	}
	
	if (kontra.keys.pressed('right')) {
		vector.add(kontra.vector(100, 0));
	}

	if (kontra.keys.pressed('up')) {
		vector.add(kontra.vector(0, -100));
	}
	
	if (kontra.keys.pressed('down')) {
		vector.add(kontra.vector(0, 100));
	}

	return vector;
}
