function Struts(over, down){
	this.over = over;
	this.down = down;
	
	this.draw = function draw(){
		gContext.lineWidth = 2;
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(this.over+40, topRight + 50);
		gContext.lineTo(this.over, this.down);
		gContext.stroke();
	}
}