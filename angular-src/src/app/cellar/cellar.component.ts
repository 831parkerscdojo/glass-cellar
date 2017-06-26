import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { WineService } from '../services/Wine.service';
import { Wine } from '../../../Wine';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-cellar',
  templateUrl: './cellar.component.html',
  styleUrls: ['./cellar.component.css'],
  providers:[WineService]
})
export class CellarComponent implements OnInit {
	searchStr:string;
	searchRes:Wine[];

  constructor(private _wineService:WineService) { 
  }

  ngOnInit() {
  }

  searchWine(){
  	this._wineService.searchWine(this.searchStr)
  		.subscribe(res => {
  			this.searchRes = res.json;
  			console.log(res);
  		})
  }
}

