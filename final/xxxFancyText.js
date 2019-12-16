/* Jim Klayder */


/* a stick that falls over at age = startFallingAge

Note the use of gAnimator.drawRotated in the draw function.
*/

function FancyText(name, color, over, down, age) {
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
		gContext.fillStyle = '#33a';
		gContext.font = "bold 40px sans-serif";
		gContext.fillText("Hello", 50, 50);
    }
    


}//end function  
 


