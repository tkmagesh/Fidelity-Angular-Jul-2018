import { Component } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{
	
	bugs : Bug[] = [];

	onCreateNewClick(newBugName : string){
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		console.log('bug is to be toggled', bugToToggle);
	}
}