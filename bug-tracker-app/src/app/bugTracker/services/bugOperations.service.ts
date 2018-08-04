import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { BugServerService } from './bugServer.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

	constructor(private bugServer : BugServerService){

	}
	getAll() : Observable<Bug[]>{
		return this.bugServer.getAll();
	}
	createNew(bugName : string) : Observable<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugServer.save(newBugData);
		
	}

	toggle(bugToToggle : Bug) : Observable<Bug> {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugServer.save(toggledBug);
	}

	remove(bugToRemove : Bug) : Observable<any> {
		return this.bugServer.remove(bugToRemove);
	}
}









