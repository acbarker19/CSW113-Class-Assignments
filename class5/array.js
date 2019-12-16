/* Alec Barker */

var gCanvas;
var gContext;

var gList;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	
	//instantiate object using the constructor function
	
	gList =  new Array();
	gList.push(new Car('Alex', "#fcc", 50, 30));
	gList.push(new Car('Bob', "#faf", 50, 130));
	gList.push(new Car('Cathy', "#ffa", 50, 230));
	gList.push(new Car('Doug', "#faa", 50, 330));
	gList.push(new Car('Ellen', "#aaf", 50, 430));
	
	//alert("Jim's demo: "+gCarSally.getInfo()); 

	drawEverything();
	
}

function drawEverything()
{
	drawBackground();
	
	for (i=0; i<gList.length; i++)
	{
		gList[i].drawMe();
	
	}
}

function drawBackground() 
{	
	//draw a large gray background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "#ddd";
	gContext.fillRect (0, 0, 1200, 1200);
}

function moveRight(theCarName)
{
	//alert('theCarName     '+theCarName);
	
	for (i=0; i < gList.length; i++)
	{
		if (gList[i].name == theCarName)
		{
			gList[i].moveRight(10);
		}
		
	
	}
	
	drawEverything();
	
}