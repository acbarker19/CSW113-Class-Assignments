function Person (name, over, down, age) {
    this.name = name;
    this.over = over;
    this.down = down;
    this.age = age;

    this.getInfo = function getInfo() {
        return 'name ' + this.name 
        	+ '   over ' + this.over 
        	+ '   down ' + this.down; 
    };
    
    this.move = function move() {

    	if (this.age > 0)
    	{
    		this.age++;
    		
    		this.over += 2;

    		if (this.age > 90)
    		{
    			this.age = 0;	
    		}
    	}
	
    }
	
	this.draw = function draw() {

		var width = 80;
		var height = 25;

		this.drawPerson(this.over + width * 0.25, this.down + height);

		gContext.fillStyle = "#d33";
		gContext.font = "bold 20px sans-serif";
		gContext.fillText(this.name, this.over, this.down + height * 5.5);
		
    };
    
    this.drawPerson = function drawPerson(over, down) {

		var centerX = over;
		var centerY = down;
		var radius = 10;

		gContext.beginPath();
		gContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		gContext.fillStyle = 'white';
		gContext.fill();
		gContext.lineWidth = 1;
		gContext.strokeStyle = 'black';
		gContext.stroke();
		
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(over, down+10);
		gContext.lineTo(over, down+50);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(over-10, down+90);
		gContext.lineTo(over, down+50);
		gContext.lineTo(over+10, down+90);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(over-10, down+50);
		gContext.lineTo(over, down+20);
		gContext.lineTo(over+10, down+50);
		gContext.stroke();
		  
    }
    
} 
 

