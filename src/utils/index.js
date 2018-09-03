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

export const handlePlayerMovement = sprite => {
	if (kontra.keys.pressed('left')){
		sprite.dx = -5;
	}
	else if (kontra.keys.pressed('right')) {
		sprite.dx = 5;
	}
	else {
		sprite.dx = 0;
	}

	if (kontra.keys.pressed('up')) {
		sprite.dy = -5;
	}
	else if (kontra.keys.pressed('down')) {
		sprite.dy = 5;
	}
	else {
		sprite.dy = 0;
	}
}
