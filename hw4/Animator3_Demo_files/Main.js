/* Jim Klayder   fall 2017 */

var gCanvas;
var gContext;

var gList;

var gAnimatorID; 
var gNameOfCarToAnimate;
var gAnimationCounter;

function init()
{
	//alert("start init()");
	
	
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	gList =  new Array();
	gList.push(new Car('Scott', "#afa", 10, 30, 0));
	gList.push(new Car('Tim', "#ff0", 50, 130, 0));
	gList.push(new Car('Bill', "#0fa", 30, 230, 0));
	gList.push(new Car('Karen', "#ccc", 25, 330, 0));
	gList.push(new Car('Becky', "#efa", 50, 430, 0));
	
	gAnimator = new Animator("Animator One",1,2,3);
	/* NOTE: the Animator will now do all drawing
	
	Each object added to the Animator should have:
		a data member named "name"
		a function with the signature "this.move = function move() "
		a function with the signature "this.draw = function draw() "
	
	*/
	
	//for debugging
	//gAnimator.animateAddObject(new Thing('Alex', 60, 50, 30));
	
	gAnimator.animateAddObject(gList[0]);
	gAnimator.animateAddObject(gList[1]);
	gAnimator.animateAddObject(gList[2]);
	gAnimator.animateAddObject(gList[3]);
	gAnimator.animateAddObject(gList[4]);
	
	startAnimateLoop(); 

	
    
    //alert("end init()");
}



function moveRight(theCarName)
{
	for (i=0; i < gList.length; i++)
	{
		if (gList[i].name == theCarName)
		{
			gList[i].age = 1; //this will make the object start moving
		}
		
	
	}
}



