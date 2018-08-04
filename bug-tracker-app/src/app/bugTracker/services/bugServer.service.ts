import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'


@Injectable()
export class BugServerService{

	private apiUrl = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}

	getAll() : Observable<Bug[]>{
		return this.httpClient
			.get<Bug[]>(this.apiUrl)
	}

	save (bugData : Bug) : Observable<Bug> {
		if (bugData.id === 0){
			return this.httpClient.post<Bug>(this.apiUrl, bugData);
		} else {
			return this.httpClient.put<Bug>(`${this.apiUrl}/${bugData.id}`, bugData);
		}
	}

	remove(bugData : Bug) : Observable<any>{
		return this.httpClient.delete<any>(`${this.apiUrl}/${bugData.id}`);
	}
}


/*
axios.post('http://localhost:3000/bugs', bugData)
*/