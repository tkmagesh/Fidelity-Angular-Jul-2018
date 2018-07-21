import { Component } from '@angular/core';


@Component({
	selector : 'app-greeter',
	templateUrl : './greeter.component.html'
})
export class GreeterComponent{
	greetMsg = '[Dummy greet message!]';

	userName = '';

	onTxtUserNameChange(value){
		this.userName = value;
	}
	onGreetClick(){
		this.greetMsg = `Hi ${this.userName}, Have a nice day!`;
	}
}