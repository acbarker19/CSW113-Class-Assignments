function Plane (name, color, over, down, age) {
    this.name = name;
    this.color = color;
    this.over = over;
    this.down = down;
    this.age = age;

    this.getInfo = function getInfo() {
        return 'name ' + this.name 
        	+ '   color ' + this.color 
        	+ '   over ' + this.over 
        	+ '   down ' + this.down; 
    };
    
    this.move = function move() {

    	if (this.age > 0)
    	{
    		this.age++;
    		
    		this.over -= 7;

    		if (this.age > 50)
    		{
    			this.age = 0;	
    		}
    	}
	
    }
	
	this.draw = function draw() {

		var width = 80;
		var height = 25;

		this.drawPlane(this.over + width * 0.25, this.down + height);

		gContext.fillStyle = "#d33";
		gContext.font = "bold 20px sans-serif";
		gContext.fillText(this.name, this.over + 30, this.down + height * 4);
		
    };
    
    this.drawPlane = function drawPlane(over, down) {

		var centerX = over;
		var centerY = down;
		var radius = 10;

		gContext.beginPath();
		gContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		gContext.fillStyle = this.color;
		gContext.fill();

		gContext.fillRect(over, down-radius, 80, 20);
		
		gContext.beginPath();
		gContext.moveTo(over+20, down-radius);
		gContext.lineTo(over+40, down-50);
		gContext.lineTo(over+45, down-50);
		gContext.lineTo(over+45, down-radius);
		gContext.fill();
		
		gContext.beginPath();
		gContext.moveTo(over+20, down+radius);
		gContext.lineTo(over+40, down+50);
		gContext.lineTo(over+45, down+50);
		gContext.lineTo(over+45, down+radius);
		gContext.fill();
		
		gContext.beginPath();
		gContext.moveTo(over+75, down-radius);
		gContext.lineTo(over+90, down-30);
		gContext.lineTo(over+95, down-30);
		gContext.lineTo(over+95, down+30);
		gContext.lineTo(over+90, down+30);
		gContext.lineTo(over+75, down+radius);
		gContext.fill();
		  
    }
    
}
 

