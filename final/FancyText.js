/* Jim Klayder */


/* a stick that falls over at age = startFallingAge

Note the use of gAnimator.drawRotated in the draw function.
*/

function FancyText (name, color, over, down, age, startTime) {
    this.name = name;
    this.color = color;
    this.over = over;
    this.down = down;
    this.age = age;
	

	var canMove = true;
    
    var currentAngle = 0;   //private data
	var numDegreesChange;     //private data
 
	var startFallingAge = startTime;  //private data
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
    }
	
	this.pause = function pause(){
		canMove = false;
	}
	
	this.cont = function cont(){
		canMove = true;
	}

	
	this.doRotation = function doRotation(degreeChange, rotationTime) {  
		numDegreesChange = degreeChange;
		stopFallingAge = startFallingAge + 71;
//		this.age =  startFallingAge;
		this.age = 100;
		//alert("startFallingAge and stopFallingAge  "+startFallingAge+"  "+stopFallingAge);
	}

    this.move = function move() {                                                                                                                                                            
    	//NOTE: make this object stop by setting this.age to 0
    	if (this.age > 0 && canMove == true)
    	{
    		this.age++;
    		
    		if (this.age > startFallingAge)
    		{
    			currentAngle += numDegreesChange;
				this.down += 1;
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
    	
	
		
		gContext.fillStyle = '#f33';
		gContext.font = 'bold 20px sans-serif';
		gContext.fillText(name, 0, 0);
    }
    


}//end function  
 


