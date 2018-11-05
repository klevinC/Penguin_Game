function drawText(x, y, words, s, f, size, align, grow) {	//x, y, text, stroke, fill, size, grow size, alignment
	
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
	
	
	
		//size
	textSize(size);
	if(grow !== undefined) {
		if(align === "center") {
			if(mouseX >= x - size/2 * words.length && mouseX <= x + size/2 * words.length && mouseY >= y - size - 10 && mouseY <= y + size/5) {
				textSize(size+grow);
				if(mouseClick)
					return "click"		//optional (text does not need to be clickable)
			}
		}
	}
	
	
	
		//align
	if(align === "center") {
		textAlign(CENTER);
	} else if(align === "left") {
		textAlign(LEFT);
	}else if(align === "right") {
		textAlign(RIGHT);
	}
		
	text(words, x, y);
	
}