var gCanvas;
var gContext;

var gList;

var gAnimatorID; 
var gAnimationCounter;

function init()
{

	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gList =  new Array();
	gList.push(new Plane('Boeing', "#f00", 380, 30, 0));

	gList.push(new Person('Tim', 10, 300, 0));
	
	gAnimator = new Animator("Animator One",1,2,3);

	gAnimator.animateAddObject(gList[0]);
	gAnimator.animateAddObject(gList[1]);

	
	startAnimateLoop(); 

}

function move(objectName)
{
	for (i=0; i < gList.length; i++)
	{
		if (gList[i].name == objectName)
		{
			gList[i].age = 1;
		}
		
	
	}
}
