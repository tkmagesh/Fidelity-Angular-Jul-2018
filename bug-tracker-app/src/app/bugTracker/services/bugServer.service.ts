import { Bug } from '../models/Bug';

import axios from 'axios';;

export class BugServerService{

	private apiUrl = 'http://localhost:3000/bugs';

	getAll() : Promise<Bug[]>{
		return axios
			.get(this.apiUrl)
			.then(response => response.data);
	}

	save (bugData : Bug) : Promise<Bug> {
		if (bugData.id === 0){
			return axios.post(this.apiUrl, bugData)
				.then(response => response.data);
		} else {
			return axios.put(`${this.apiUrl}/${bugData.id}`, bugData)
				.then(response => response.data);
		}
	}

	remove(bugData : Bug) : Promise<any>{
		return axios.delete(`${this.apiUrl}/${bugData.id}`)
			.then(response => response.data);
	}
}


/*
axios.post('http://localhost:3000/bugs', bugData)
*/