/* Jim Klayder   fall 2017 */

var gCanvas;
var gContext;
var gAgeInfoElement;

var gPersonThatFlips;

function init()
{
	//alert("start init()");
	
	
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gAgeInfoElement = document.getElementById('ageInfo');
	gAgeInfoElement.innerHTML = "gAgeInfoElement";
	

	gPersonThatFlips = new PersonThatFlips('Person', "#44f", 0, 0, 0);
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
	
	gAnimator.animateAddObject(gPersonThatFlips);
	
	startAnimateLoop(); 
    //alert("end init()");
}

function makePersonFlipTwoTimes()
{
		//alert("makeStickFall() not yet implemented");
		gPersonThatFlips.age =  1;
		gPersonThatFlips.setStopFallingAge(144);

}

function makePersonFlipFourTimes()
{
		//alert("makeStickFall() not yet implemented");
		gPersonThatFlips.age =  1;
		gPersonThatFlips.setStopFallingAge(288);

}

function resetPerson()
{
		//alert("makeStickFall() not yet implemented");
		gPersonThatFlips.reset();

}

