import { Component } from '@angular/core';
// Importo el servicio CMS 20.04.2020
import { StarwarsApiService } from './starwars-api.service';
import { HeaderPrincipalComponent } from './components/header-principal/header-principal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'stars';
  url: string; // Variable URL que consulto de la lista de ids del menu LorenaF 28.04.2020
  // Implementación de la appi CMS 20.04.2020
  stars: any[] = [];
  
  constructor(protected userService: StarwarsApiService) {
    
  }

  ngOnInit() {
    let header = new HeaderPrincipalComponent();//Creo objeto de la clase de header-component
    this.url = header.getUrl();// Traigo URL de la lista de la clase de header-component
    this.userService.getStarwarsApi(this.url)//Utilizo la URL en el metodo que consume la API
    .subscribe(
      (data) => { // Success
        this.stars = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
