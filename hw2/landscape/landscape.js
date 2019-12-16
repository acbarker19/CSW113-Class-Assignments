/* Alec Barker */

var gCanvas;
var gContext;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	drawLandscape();
	//alert("I hope you enjoy my house.");
}


function drawLandscape() 
{	
	//draw a large blue background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "#0cf";
	gContext.fillRect (0, 0, 1200, 1200);
	
	gContext.fillStyle = "#060";
	gContext.fillRect(0, 100, 1000, 1000);
	
	gContext.beginPath();
	gContext.moveTo(10, 100);
	gContext.lineTo(30, 80);
	gContext.lineTo(60, 80);
	gContext.lineTo(80, 100);
	gContext.fill();
	
	gContext.fillStyle = "#fc0";
	gContext.fillRect(120, 10, 20, 20);
}