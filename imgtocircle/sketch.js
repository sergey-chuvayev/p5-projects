let index = 1;
let radius = 40;
let angle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(000);
}

function draw() {
	// const len = 100;
	stroke(255);
	translate(windowWidth/2, height);
	drawBranch(380);
	noLoop();
}

const drawBranch = len => {
	line(0, 0, 0, -len);
	// fill(random(255));
	// ellipse(0, 0, len);
	translate(0, -len);
	if (len > 4) {
		stroke(random(255),random(255),random(255), random(90,255));
		push();
		rotate(PI/random(10));
		drawBranch(len * 0.67);
		pop();
		push();
		rotate(-PI/random(10));
		drawBranch(len * 0.67);
		pop();
	}
};