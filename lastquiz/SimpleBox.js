/* Alec Barker */
function SimpleBox(name, num, age){
	this.name = name;
	this.num = num;
	this.age = age;
	
	var originalNum = num;
	
	this.move = function move(){
		if(this.age > 0){
			this.age++;
			if(this.age < 15){
				this.num += 4;
			}
			else if(this.age < 30){
				this.num -= 4;
			}
			else{
				this.age = 0;
				this.num = originalNum;
			}
		}
	}
	
	this.draw = function draw(){
		gContext.fillStyle = '#f00';
		gContext.fillRect(this.num, this.num, this.num, this.num);
		
		gContext.fillStyle = '#00f';
		gContext.font = 'bold ' + this.num + 'px sans-serif';
		gContext.fillText("Hello", this.num, this.num);
	}
}