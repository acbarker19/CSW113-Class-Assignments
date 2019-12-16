/* Alec Barker */

var gCanvas;
var gContext;

function init()
{
	//put any special initialization code here
	gCanvas = document.getElementById('canvas');
	gContext = gCanvas.getContext('2d');
	
	drawCar();
	//alert("I hope you enjoy my house.");
}


function drawCar() 
{	
	//draw a large gray background for the canvas
	//Notice that the canvas is actually smaller than 1200 x 1200.
	gContext.fillStyle = "rgb(200,200,200)";
	gContext.fillRect (0, 0, 1200, 1200);
	
	gContext.fillStyle = "#f77";
	gContext.fillRect(40, 50, 40, 30);
	gContext.fillRect(10, 80, 100, 30);
	
	gContext.fillStyle = "#000";
	gContext.fillRect(20, 100, 20, 20);
	gContext.fillRect(80, 100, 20, 20);
	
	gContext.beginPath();
	gContext.moveTo(85, 60);
	gContext.lineTo(140, 60);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
	
	gContext.beginPath();
	gContext.moveTo(85, 70);
	gContext.lineTo(130, 70);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
	
	gContext.beginPath();
	gContext.moveTo(115, 80);
	gContext.lineTo(140, 80);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
	
	gContext.beginPath();
	gContext.moveTo(115, 90);
	gContext.lineTo(130, 90);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
	
	gContext.beginPath();
	gContext.moveTo(115, 100);
	gContext.lineTo(140, 100);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
	
	gContext.beginPath();
	gContext.moveTo(115, 110);
	gContext.lineTo(130, 110);
	
	gContext.lineWidth = 1;
	gContext.strokeStyle = "#000";
	gContext.stroke();
}