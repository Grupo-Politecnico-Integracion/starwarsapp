import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from './../../starwars-api.service';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  menu: any[] = [];//LorenaF.lista de ids para las opciones del menù 28.04.2020
  url = 'http://swapi.py4e.com/api/films/?results=100';
  filter;

  constructor(private dataApiService: StarwarsApiService) { }

  ngOnInit(): void {
    //LorenaF.lleno lista de ids para las opciones del menù 28.04.2020
    this.menu = [
      {
        "id": "1",//Peliculas
        "url": "http://swapi.py4e.com/api/films/?results=100",
      },
      {
        "id": "2",//Planetas
        "url": "http://swapi.py4e.com/api/planets/?results=100",
      },
      {
        "id": "3",//Personajes
        "url": "http://swapi.py4e.com/api/people/?results=100",
      },
      {
        "id": "4",//Especies
        "url": "http://swapi.py4e.com/api/species/?results=100",
      },
      {
        "id": "5",//Vehiculos
        "url": "http://swapi.py4e.com/api/vehicles/?results=100",
      },
      {
        "id": "6",//Naves
        "url": "http://swapi.py4e.com/api/starships/?results=100",
      }
    ];
  }

  getSearchData(filter){
    this.dataApiService.getSearch(this.filter); 
  }

  getUrl() {
    return this.url;
  }
}