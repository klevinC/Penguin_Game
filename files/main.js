var canvas;
var canvasWidth = 600;
var canvasHeight = 420;
var level = 1;

var menu = false;	//reset to true when finished

var penguin = {
	x: canvasWidth/2,
	y: canvasHeight/2,
	d: 25,
	xs: 0,
	ys: 0
};


var mouseClick = false;
function mouseClicked() {
	mouseClick = true;
}


function setup() {
	//canvas setup
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('canvas-holder');
}

function draw() {
	background(255);
		
		//only when user is at the menu
	if(menu == true) {
		/*level = 1					important*/
			//start text
		if(drawText(canvasWidth/2, canvasHeight/3, "Play", false, 0, 50, "center", 10) === "click")
			menu = false;
	} else {
		play();
	}
	
	
	
	
	drawPenguin(penguin.x, penguin.y, penguin.d);
	
	
	drawRect(0, canvasHeight*(2/3), canvasWidth, canvasHeight, false, 200);
	
	
	
		//borders
	drawRect(0, 0, canvasWidth, 3, false, 150);		//top
	drawRect(0, canvasHeight-3, canvasWidth, 3, false, 150);		//bottom
	drawRect(0, 0, 3, canvasHeight, false, 150);		//left
	drawRect(canvasWidth-3, 0, 3, canvasHeight, false, 150);		//right
	
	
	mouseClick = false;	//reset after everything
}


function play() {
	
	
}