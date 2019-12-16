/* Jim Klayder   fall 2017 */

var gCanvas;
var gContext;
var gAgeInfoElement;

var gFace;
var gStickThatFalls;

function init()
{
	//alert("start init()");
	
	
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gAgeInfoElement = document.getElementById('ageInfo');
	gAgeInfoElement.innerHTML = "gAgeInfoElement";
	
	
	//gBall = new Ball('Alex', "#fcc", 100, 150, 0);
	
	gFace = new Face('Stick', "#0ff", 350, 150, 0);
	//gStickThatFalls = new StickThatFallsUsingRotate('Stick', "#ccf", 560, 200, 0);
	
	
	gAnimator = new Animator("Animator One",1,2,3);
	/* NOTE: the Animator will now do all drawing
	
	Each object added to the Animator should have:
		a data member named "name"
		a function with the signature "this.move = function move() "
		a function with the signature "this.draw = function draw() "
	
	*/
	
	//for debugging
	//gAnimator.animateAddObject(new Thing('Alex', 60, 50, 30));
	
	
	gAnimator.animateAddObject(gFace);
	
	startAnimateLoop(); 
    //alert("end init()");
}

function doRotation(numDegreeChange)
{
		var rotationTimeElement = document.getElementById("rotationTime");
		var rotationTime = rotationTimeElement.value;
		//alert("rotationTime "+rotationTime);
		gFace.doRotation(numDegreeChange, rotationTime);
}

function reset()
{

		gFace.reset();

}


