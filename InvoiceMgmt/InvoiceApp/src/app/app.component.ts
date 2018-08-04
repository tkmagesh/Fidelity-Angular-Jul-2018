import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	customers = [];
	constructor(private httpClient : HttpClient){

	}

	ngOnInit(){
		this.httpClient
			.get<any[]>('http://localhost:3000/customers')
			.subscribe(data => {
				console.table(data);
				this.customers = data;
			});
	}

	onAddNewClick(customerName, customerCity){
		let customerData = { name : customerName, city : customerCity};
		this.httpClient
			.post<any>('http://localhost:3000/customers', customerData)
			.subscribe(newCustomer => this.customers.push(newCustomer));
	}
}
