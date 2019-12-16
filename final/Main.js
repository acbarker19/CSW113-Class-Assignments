var gCanvas;
var gContext;
var gAgeInfoElement;

var gFerrisWheel;
var gFancyText;
var gFT;

function init()
{
	//alert("start init()");
	
	
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gAgeInfoElement = document.getElementById('ageInfo');
	gAgeInfoElement.innerHTML = "gAgeInfoElement";

	gFerrisWheel = new FerrisWheel('Stick', "#0ff", 350, 150, 0);
	gFancyText = new FancyText('Watch the Ferris Wheel Go!', '#f00', 15, -20, 0, 100);
	gFT = new FancyText('The End!', '#f00', 500, -20, 0, 395);
	
	gAnimator = new Animator("Animator One",1,2,3);
	/* NOTE: the Animator will now do all drawing
	
	Each object added to the Animator should have:
		a data member named "name"
		a function with the signature "this.move = function move() "
		a function with the signature "this.draw = function draw() "
	
	*/
	
	//for debugging
	//gAnimator.animateAddObject(new Thing('Alex', 60, 50, 30));
	
	
	gAnimator.animateAddObject(gFerrisWheel);
	gAnimator.animateAddObject(gFancyText);
	gAnimator.animateAddObject(gFT);
	
	startAnimateLoop(); 
    //alert("end init()");
}

function doRotation(numDegreeChange)
{
	var rotationTimeElement = document.getElementById("rotationTime");
	var rotationTime = rotationTimeElement.value;

	//alert("rotationTime "+rotationTime);
	gFerrisWheel.doRotation(numDegreeChange, rotationTime);
	gFancyText.doRotation(numDegreeChange, rotationTime);
	

		gFT.doRotation(numDegreeChange, rotationTime);

}

function reset()
{
	gFancyText.reset();
	gFerrisWheel.reset();
	gFT.reset();
}

function pause()
{
	gFancyText.pause();
	gFerrisWheel.pause();
	gFT.pause();
}

function cont()
{
	gFancyText.cont();
	gFerrisWheel.cont();
	gFT.cont();
}
