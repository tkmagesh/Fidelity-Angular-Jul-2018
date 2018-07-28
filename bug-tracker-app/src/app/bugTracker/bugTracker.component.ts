import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	newBugName : string = '';

	onCreateNewClick(){
		let newBug : Bug = {
			name : this.newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle : Bug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}


}