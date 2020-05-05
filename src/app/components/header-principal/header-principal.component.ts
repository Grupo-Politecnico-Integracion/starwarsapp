import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  menu: any[] = [];//LorenaF.lista de ids para las opciones del menù 28.04.2020
  url = 'http://swapi.py4e.com/api/films/?results=100';

  constructor() { }

  ngOnInit(): void {
  }

  getId(id){
    switch (id) {
      case "1":
        this.url = 'http://swapi.py4e.com/api/films/?results=100';
        break;
        case "2":
          this.url = 'http://swapi.py4e.com/api/planets/?results=100';
          break;
          case "3":
            this.url = 'http://swapi.py4e.com/api/characters/?results=100';
            break;
           case "4":
            this.url = 'http://swapi.py4e.com/api/vehicles/?results=100';
            break;
            case "5":
            this.url = 'http://swapi.py4e.com/api/spaceships/?results=100';
            break;
    
      default:
        break;
    }
    
  }

  getUrl () {
    return this.url;

  }

}
