import { Bug } from '../models/Bug';

export class BugStorageService{

	private currentBugId = 0;
	private storage = window.localStorage;

	save(newBugData : Bug) : Bug {
		if (newBugData.id === 0){
			newBugData.id = ++this.currentBugId;
		}
		this.storage.setItem(newBugData.id.toString(), JSON.stringify(newBugData));
		return newBugData;
	}

	getAll() : Bug[]{
		let result : Bug[] = [];
		for(let index=0, count=this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}

	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}