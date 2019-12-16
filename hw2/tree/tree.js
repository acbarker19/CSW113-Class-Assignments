/* Alec Barker */

var gCanvas;
var gContext;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	drawTree();
	//alert("I hope you enjoy my house.");
}


function drawTree() 
{	
	//draw a large gray background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "rgb(200,200,200)";
	gContext.fillRect (0, 0, 1200, 1200);
	
	var over = 65;
	var down = 50;
	var width = 20;
	var height = 80;
	
	var lOver = 50;
	var lDown = 20;
	var lWidth = 50;
	var lHeight = 35;
	
	gContext.fillStyle = "#630";
	gContext.fillRect (over, down, width, height);
	
	gContext.fillStyle = "#060";
	gContext.beginPath();
	gContext.moveTo(over - 10, down);
	gContext.lineTo(over + width + 10, down);
	gContext.lineTo(over + width + 20, down - 20);
	gContext.lineTo(over + width + 10, down - 40);
	gContext.lineTo(over - 10, down - 40);
	gContext.lineTo(over - 20, down - 20);
	gContext.fill();
}