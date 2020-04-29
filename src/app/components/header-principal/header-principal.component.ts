import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from './../../starwars-api.service';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {
  
  constructor(private dataApiService: StarwarsApiService) { 
  }

  filterPost = "";

  ngOnInit(): void {

  }

  clickCaptureData(){

  		alert('funciona');
  }

}
