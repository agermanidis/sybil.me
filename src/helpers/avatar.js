const colors = [
	'#9013FE',
	'#9013FE',
	'#CD5C5C',
	'#FF7A7A',
	'#20B2AA',
	'#C71585',
	'#FFA500',
	'#DB7093'
];

const generateAvatar = (address) => {
    address = address.slice(2);
    let temporaryCanvas = document.createElement('canvas');
    temporaryCanvas.width = 400;
    temporaryCanvas.height = 400;
    let ctx = temporaryCanvas.getContext('2d');
    const colorIdx1 = parseInt(address[0], 16);
    const colorIdx2 = parseInt(address[1], 16);
    let ptr = 0;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const h = address.slice(ptr*2, ptr*2+2);
			const value = parseInt(h, 16);
			if (ptr === colorIdx1 || ptr === colorIdx2) {
                ctx.fillStyle = colors[value % 4];
			} else {
                ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
			}
			ctx.fillRect(j * 100, i * 100, 100, 100);
			ptr++;
		}
    }
    return temporaryCanvas.toDataURL();
}

export { generateAvatar };
