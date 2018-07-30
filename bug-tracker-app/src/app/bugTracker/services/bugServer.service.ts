import { Bug } from '../models/Bug';

import axios from 'axios';;

export class BugServerService{
	getAll() : Promise<Bug[]>{
		return axios
			.get('http://localhost:3000/bugs')
			.then(response => response.data);
	}
}