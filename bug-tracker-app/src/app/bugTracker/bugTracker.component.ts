import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	newBugName : string = '';

	sortBugBy : string = 'name';

	sortBugDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs = this.bugOperations.getAll();
	}

	onCreateNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations.remove(closedBug);
				this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id);
			});
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}


}