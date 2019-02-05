const axiom = 'F';
const rule1 = {
	a: 'F',
	b: 'FF+[+F-F-F]-[-F+F+F]'
}
const rule2 = {
	a: 'B',
	b: '−A+B+A−'
}
let sentense = axiom;
let len = 150;
let angle;


function setup() {
	createCanvas(800, 800);
	background(52);
	angle = radians(25);
	const button = createButton('generate');
	button.mouseClicked(generate);
	turtle();
}

const turtle = () => {
	len*=.6
	background(51);
	translate(width/2, height);
	for (let i = 0; i < sentense.length; i++) {
		const current = sentense.charAt(i);
		
		if (current == 'F') {
			stroke(random(100,255));
			line(0,0,0,-len);
			translate(0,-len);
		} else if (current == '+') {
			rotate(angle);
		} else if (current == '-') {
			rotate(-angle);
		} else if (current == '[') {
			push();
		} else if (current == ']') {
			pop();
		}
	}
}

const generate = () => {
	let nextSentence = '';
	for (let i = 0; i < sentense.length; i++) {
		const letter = sentense.charAt(i);
		if (letter === rule1.a) {
			nextSentence += rule1.b;
		} else if (letter === rule2.a) {
			nextSentence += rule2.b;
		} else {
			nextSentence += letter;
		}
	}
	sentense = nextSentence;
	turtle();
	translate(width/2, height);
	createP(nextSentence);
}