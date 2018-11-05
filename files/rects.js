function drawRect(x, y, w, h, s, f) {	//x, y, width, height, stroke, fill
	
		//stroke
	if(s === false) {
		noStroke();
	} else {
		stroke(s);
	}
	
		//fill
	if(f === false) {
		noFill();
	} else {
		fill(f);
	}
	
	
	rect(x, y, w, h);	
	
	
	if(collideLineCircle(x, y, w, y, penguin.x, penguin.y, penguin.d)) {
		console.log("test")
	}
}