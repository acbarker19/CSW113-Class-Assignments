/* Alec Barker */

var gCanvas;
var gContext;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	drawKey();
	//alert("I hope you enjoy my house.");
}


function drawKey() 
{	
	//draw a large gray background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "rgb(200,200,200)";
	gContext.fillRect (0, 0, 1200, 1200);
	
	gContext.fillStyle = "#fc0";
	gContext.fillRect(10, 70, 90, 10);
	gContext.fillRect(100, 60, 30, 30);
	gContext.fillRect(20, 80, 10, 20);
	gContext.fillRect(35, 80, 10, 10);
	
	gContext.fillStyle = "rgb(200,200,200)";
	gContext.fillRect(110, 70, 10, 10);
	
	//make a large, light blue box for the basic house
	gContext.fillStyle = "rgb(100,100,255)";
	gContext.fillRect (over, down, width, height);
	
	//now draw a red door on the house
	gContext.fillStyle = "rgb(200,0,0)";
	gContext.fillRect (doorOver, doorDown, doorWidth, doorHeight);
	
	//now draw a green window on the house
	gContext.fillStyle = "rgb(0,200,0)";
	gContext.fillRect (windowOver, windowDown, windowWidth, windowHeight);
	
	//draw a black roof
	gContext.fillStyle = "rgb(0,0,0)";
	gContext.beginPath();
	gContext.moveTo(over - 10, down);
	gContext.lineTo(over + width + 10, down);
	gContext.lineTo(over + width / 2, down - height / 2);
	gContext.fill();
}