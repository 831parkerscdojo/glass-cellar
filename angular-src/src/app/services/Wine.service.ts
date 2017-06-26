import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WineService{
	private searchUrl: string;

	constructor(private _http:Http){

	}

	searchWine(str:string){
		this.searchUrl = 'http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=7d20ddd2a5b5609e51e32a021649581b&search='+str+'&type=wine'
		return this._http.get(this.searchUrl)
		.map(res => res.json());
	}


}


