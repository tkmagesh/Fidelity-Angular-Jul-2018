import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

import axios from 'axios';

console.dir(axios);




@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	

	sortBugBy : string = 'name';

	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		//this.bugs = this.bugOperations.getAll();

		/*var p = axios.get('http://localhost:3000/bugs');

		var p2 = p.then(function(response){
			return response.data;
		});

		var self = this;

		p2.then(function(bugs){
			self.bugs = bugs;
		});*/

		/*var p = axios.get('http://localhost:3000/bugs');
		var p2 = p.then(response => response.data);
		p2.then(bugs => this.bugs = bugs);*/

		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBugAdded(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations.remove(closedBug)
					.then(_ => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
			});
	}



}