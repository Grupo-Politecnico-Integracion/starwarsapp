import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from './../../starwars-api.service';
import { films } from './../../models/film';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

	inputSearch: films;

  constructor(private dataApiService: StarwarsApiService) { 
  }

  ngOnInit(): void {
  	
  }

  search(){
  	this.dataApiService.getSearchData(this.inputSearch);
  }


  

}
