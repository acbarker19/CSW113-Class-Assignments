/* Jim Klayder */


/* a stick that falls over at age = startFallingAge
*/

function PersonThatFlips (name, color, over, down, age) {
    this.name = name;
    this.color = color;
    this.over = over;
    this.down = down;
    this.age = age;
    
    var currentAngle = 0;   //private data
 
	var startFallingAge = 1;  //private data
	var stopFallingAge = startFallingAge + 71;  //private data
	

	var originalOver = this.over;   //private data
	var otiginalDown = this.down;   //private data
    
    
    this.getInfo = function getInfo() {
        return 'name ' + this.name 
        	+ '   color ' + this.color 
        	+ '   over ' + this.over 
        	+ '   down ' + this.down; 
    };
    
    this.reset = function reset() {
    	this.over = originalOver;
	    this.down = otiginalDown;
	    currentAngle = 0;
	    this.age = 0;
    }
    
    this.move = function move() {                                                                                                                                                            
    	//NOTE: make this object stop by setting this.age to 0
    	if (this.age > 0)
    	{
    		this.age++;
    		
    		if (this.age > startFallingAge)
    		{
    			currentAngle += 5;
    		}
			
    		if (this.age > stopFallingAge)
    		{
    			this.age = 0;
    		}

    		gAgeInfoElement.innerHTML = ""+this.age;
    	}
    	
    	
    	
    }
	
	this.setStopFallingAge = function setStopFallingAge(num){
		stopFallingAge = num;
	}
	
	this.draw = function draw() {
        
        //this.drawStickAtAngle();
        gAnimator.drawRotated(currentAngle, this.over+300, this.down+180, this.drawPersonAtAngle)
    
		
    }
    
    this.drawPersonAtAngle = function drawPersonAtAngle() {
    
    	//NOTE: Since we are using 'gAnimator.drawRotated', the rotation point of the
		
		var centerX = over;
		var centerY = down;
		var radius = 10;

		gContext.beginPath();
		gContext.arc(centerX, centerY+20, radius, 0, 2 * Math.PI, false);
		gContext.fillStyle = 'white';
		gContext.fill();
		gContext.lineWidth = 1;
		gContext.strokeStyle = 'black';
		gContext.stroke();
		
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(over, down+30);
		gContext.lineTo(over, down+70);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(over-10, down+110);
		gContext.lineTo(over, down+70);
		gContext.lineTo(over+10, down+110);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(over-10, down+70);
		gContext.lineTo(over, down+40);
		gContext.lineTo(over+10, down+70);
		gContext.stroke();
    
    }
    


}//end function  
 

