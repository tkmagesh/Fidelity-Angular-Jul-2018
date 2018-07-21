export class CalculatorModel{
	x : number = 0;
	y : number = 0;
	result : number = 0;
	
	add() : void {
		this.result = this.x + this.y;
	}
	subtract() : void {
		this.result = this.x - this.y;
	}
	multiply() : void {
		this.result = this.x * this.y;
	}
	divide() : void {
		this.result = this.x / this.y;
	}
}