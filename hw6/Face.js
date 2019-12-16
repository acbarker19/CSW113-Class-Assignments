/* Jim Klayder */


/* a stick that falls over at age = startFallingAge

Note the use of gAnimator.drawRotated in the draw function.
*/

function Face (name, color, over, down, age) {
    this.name = name;
    this.color = color;
    this.over = over;
    this.down = down;
    this.age = age;
    
    var currentAngle = 0;   //private data
	var numDegreesChange = 5;     //private data
 
	var startFallingAge = 128;  //private data
	var stopFallingAge = startFallingAge + 17;  //private data
	
	var pivotLocation = "center";  //center  topLeft  or bottomCenter
	

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
	
	this.setPivotLocation = function setPivotLocation(thePivotLocation) {  
		pivotLocation = thePivotLocation;
		this.reset();
	}
	
	this.doRotation = function doRotation(degreeChange, rotationTime) {  
		numDegreesChange = degreeChange;
		stopFallingAge = startFallingAge + parseInt(rotationTime);
		this.age =  startFallingAge;
		
		//alert("startFallingAge and stopFallingAge  "+startFallingAge+"  "+stopFallingAge);
	}
	
    
    this.move = function move() {                                                                                                                                                            
    	//NOTE: make this object stop by setting this.age to 0
    	if (this.age > 0)
    	{
    		this.age++;
    		
    		if (this.age > startFallingAge)
    		{
    			currentAngle += numDegreesChange;
    		}
    		
    		if (this.age > stopFallingAge)
    		{
    			this.age = 0;
    		}                                                                              
    		
    		gAgeInfoElement.innerHTML = ""+this.age+"  "+startFallingAge+"  "+stopFallingAge; //for debugging
    	}    	
    }
	
	this.draw = function draw() {
        
        //currentAngle is the angle of rotation for drawing this object
        //this.over, this.down is the center of the rotation
        //this.drawStickAtAngle is the function called to draw the rotated object
        gAnimator.drawRotated(currentAngle, this.over, this.down, this.drawStickAtAngle)
        		
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
		
		var leftEyeX = 30;
		var rightEyeX = 60;
		var eyeY = 25;
		var eyeWidth = 12;
		var eyeHeight = 8;
		
		if (pivotLocation == "topLeft")
		{
			topLeft = -width/2;
			topRight = 0;
			move = 50
		} else if (pivotLocation == "center")
		{
			topLeft = -width/2;
			topRight = -height/2;
			move = 0;
		} else if (pivotLocation == "bottomCenter")
		{
			topLeft = -width/2;
			topRight = -height+15;
			move = -35;
		}
		
		//make a large box of the appropriate color 
		
		//so now all drawing will be done relative to topLeft, topRight
		var centerX = topLeft + width/2;
		var centerY = topRight/2.5;
		var radius = 10;

		gContext.beginPath();
		gContext.arc(topLeft+width/2, topRight/100+move, radius, 0, 2 * Math.PI, false);
		gContext.fillStyle = '#0ff';
		gContext.fill();
		gContext.lineWidth = 1;
		gContext.strokeStyle = 'black';
		gContext.stroke();
		
		gContext.fillStyle = 'black';
		gContext.beginPath();
		gContext.moveTo(topLeft + width/2, topRight + height/1.65);
		gContext.lineTo(topLeft + width/2, topRight + height);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(topLeft+width/3, topRight + height*1.4);
		gContext.lineTo(topLeft + width/2, topRight + height);
		gContext.lineTo(topLeft+width/1.5, topRight + height*1.4);
		gContext.stroke();
		
		gContext.beginPath();
		gContext.moveTo(topLeft+width/3, topRight + height);
		gContext.lineTo(topLeft + width/2, topRight + height/1.5);
		gContext.lineTo(topLeft+width/1.5, topRight + height);
		gContext.stroke();
		
		
		
		gContext.fillStyle = '#f00';
		gContext.fillRect (-2,-2, 4, 4);   //draw a black dot at the center of rotation (0,0)
    }
    


}//end function  
 


