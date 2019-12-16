var gCanvas;
var gContext;

var gList;

var gAnimatorID; 
var gAnimationCounter;

var gBox;

function init()
{

	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gBox = new SimpleBox("A Box", 20, 0);
	
	gAnimator = new Animator("Animator One",1,2,3);

	gAnimator.animateAddObject(gBox);

	
	startAnimateLoop(); 

}

function move(objectName)
{
	gBox.age = 1;
}
