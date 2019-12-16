/* Alec Barker */

var gCanvas;
var gContext;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	drawPencil();
	//alert("I hope you enjoy my house.");
}


function drawPencil() 
{	
	//draw a large gray background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "rgb(200,200,200)";
	gContext.fillRect (0, 0, 1200, 1200);

	gContext.fillStyle = "#ff0";
	gContext.fillRect(40, 70, 80, 10);
	
	gContext.fillStyle = "#fcf";
	gContext.fillRect(120, 70, 10, 10);
	
	gContext.fillStyle = "#fc9";
	gContext.beginPath();
	gContext.moveTo(40, 70);
	gContext.lineTo(20, 75);
	gContext.lineTo(40, 80);
	gContext.fill();
	
	gContext.fillStyle = "#000";
	gContext.beginPath();
	gContext.moveTo(28, 73);
	gContext.lineTo(20, 75);
	gContext.lineTo(28, 77);
	gContext.fill();
}