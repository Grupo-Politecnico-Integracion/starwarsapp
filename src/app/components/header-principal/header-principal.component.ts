import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

//LorenaF.lista de ids para las opciones del menù 28.04.2020
  menu: any[] = [];
  url = 'http://swapi.py4e.com/api/films/';
  constructor() { }

  ngOnInit(): void {
    //LorenaF.lleno lista de ids para las opciones del menù 28.04.2020
    this.menu = [
      {
        "id": "1",//Peliculas
        "url": "",
      },
      {
        "id": "2",//Planetas
        "url": "",
      },
      {
        "id": "3",//Personajes
        "url": "http://swapi.py4e.com/api/people/?results=100",
      },
      {
        "id": "4",//Especies
        "url": "",
      },
      {
        "id": "5",//Vehiculos
        "url": "",
      },
      {
        "id": "6",//Naves
        "url": "",
      }
    ];
  }

  getUrl () {
    return this.url;
  }

}
