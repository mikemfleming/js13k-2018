import kontra from 'kontra';

import {
	MAX_WIDTH,
	MAX_HEIGHT
} from './constants';

const canvas = document.createElement('canvas');
canvas.width = MAX_WIDTH;
canvas.height = MAX_HEIGHT;

const container = document.getElementById('game-container');
container.appendChild(canvas);

const Kontra = window.kontra;
Kontra.init();

export default Kontra;
