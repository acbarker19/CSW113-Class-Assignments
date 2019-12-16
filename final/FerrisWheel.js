/* Jim Klayder */


/* a stick that falls over at age = startFallingAge

Note the use of gAnimator.drawRotated in the draw function.
*/

function FerrisWheel (name, color, over, down, age) {
    this.name = name;
    this.color = color;
    this.over = over;
    this.down = down;
    this.age = age;
	
	var canMove = true;
	var theEnd = false;
    
    var currentAngle = 0;   //private data
	var numDegreesChange;     //private data
 
	var startFallingAge = 100;  //private data
	var stopFallingAge;  //private data
	
	var pivotLocation = "center";  //center  topLeft  or bottomCenter
	
	var originalOver = this.over;   //private data
	var originalDown = this.down;   //private data
    
    
    this.getInfo = function getInfo() {
        return 'name ' + this.name 
        	+ '   color ' + this.color 
        	+ '   over ' + this.over 
        	+ '   down ' + this.down; 
    };
    
    this.reset = function reset() {
    	this.over = originalOver;
	    this.down = originalDown;
	    currentAngle = 0;
	    this.age = 0;
		canMove = true;
		theEnd = false;
    }
	
	this.pause = function pause(){
		canMove = false;
	}
	
	this.cont = function cont(){
		canMove = true;
	}

	
	this.doRotation = function doRotation(degreeChange, rotationTime) {  
		numDegreesChange = degreeChange;
		stopFallingAge = startFallingAge + parseInt(rotationTime);
		this.age =  startFallingAge;
		
		//alert("startFallingAge and stopFallingAge  "+startFallingAge+"  "+stopFallingAge);
	}
	
	this.getEnd = function getEnd(){
		return theEnd;
	}
    
    this.move = function move() {                                                                                                                                                            
    	//NOTE: make this object stop by setting this.age to 0
    	if (this.age > 0 && canMove == true)
    	{
    		this.age++;
    		
    		if (this.age > 171)
    		{
    			currentAngle += numDegreesChange;
    		}
    		
    		if (this.age > stopFallingAge+143)
    		{
    			this.age = 0;
				theEnd = true;
    		}                                                                              
    		
    		gAgeInfoElement.innerHTML = ""+this.age+"  "+startFallingAge+"  "+stopFallingAge; //for debugging
    	}    	
    }
	
	this.draw = function draw() {
        
        //currentAngle is the angle of rotation for drawing this object
        //this.over, this.down is the center of the rotation
        //this.drawStickAtAngle is the function called to draw the rotated object
        gAnimator.drawRotated(currentAngle, this.over, this.down, this.drawStickAtAngle)
		this.drawSupports;
    }
	
	this.drawSupports = function drawSupports(){
		var topLeft = 0;
		var topRight = 0;
		
		var width = 80;
		var height = 100;
		
		gContext.lineWidth = 2;
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(topLeft+width/2, topRight + height/2);
		gContext.lineTo(topLeft, topRight);
		gContext.stroke();
	}
    
    this.drawStickAtAngle = function drawStickAtAngle() {
    
    	//NOTE: Since we are using 'gAnimator.drawRotated' in the draw function, 
    	//      we need to control the rotation point of the drawing routine
        //      relative to this.over, this.down
    	
	
		var topLeft = 0;
		var topRight = 0;
		
		var width = 80;
		var height = 100;
		
		var move = 0;

		if (pivotLocation == "center")
		{
			topLeft = -width/2;
			topRight = -height+50;
			move = -35;
		}
		
		//make a large box of the appropriate color 
		
		//so now all drawing will be done relative to topLeft, topRight
		

		gContext.beginPath();
		gContext.arc(topLeft+width/2, topRight+height/2, 100, 0, 2 * Math.PI, false);
		gContext.lineWidth = 2;
		gContext.strokeStyle = 'black';
		gContext.stroke();
		
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(topLeft-60, topRight + height/2);
		gContext.lineTo(topLeft + 140, topRight + height/2);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(topLeft+width/2, topRight + height+50);
		gContext.lineTo(topLeft+width/2, topRight + height-150);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(topLeft-33, topRight + 119);
		gContext.lineTo(topLeft+112, topRight-18);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(topLeft-33, topRight-18);
		gContext.lineTo(topLeft+112, topRight+119);
		gContext.stroke();
		
		
		gContext.fillStyle = '#0cf';
		gContext.beginPath();
		gContext.arc(topLeft-60, topRight+height/2, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft+140, topRight+height/2, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft+width/2, topRight+height+50, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft+width/2, topRight+height-150, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.fillStyle = '#f6f';
		gContext.beginPath();
		gContext.arc(topLeft-33, topRight+119, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft+112, topRight-18, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft-33, topRight-18, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		gContext.beginPath();
		gContext.arc(topLeft+112, topRight+119, 10, 0, 2 * Math.PI, false);
		gContext.fill();
		
		
//		gContext.fillStyle = '#f00';
//		gContext.fillRect (-2,-2, 4, 4);   //draw a red dot at the center of rotation (0,0)
		
    }
    


}//end function  
 


