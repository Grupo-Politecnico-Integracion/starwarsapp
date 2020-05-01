import { Component } from '@angular/core';
// Importo el servicio CMS 20.04.2020
import { StarwarsApiService } from './starwars-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stars';

  // Implementación de la appi CMS 20.04.2020
  stars: any[] = [];

  constructor(
    protected userService: StarwarsApiService
  ) {
   
   
  }

  ngOnInit() {
    this.userService.getStarwarsApi()
    .subscribe(
      (data) => { // Success
        this.stars = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cargarStars(){

     // Declaración de interfaces CMS 01.05.2020
     interface Titulo{
      id: number;
      pelicula: string;
     }
  
  var titulos: Titulo[] = []
  var idTitulo: number = 0;

  // Paso los valores de stars a un arreglo temporal titulo CMS 01.05.2020
  this.stars.forEach(titulo => {

    // Lleno el arreglo titulos CMS 01.05.2020
    titulos.push({
    id: idTitulo,
    pelicula: titulo.title
    }
    );
   
    idTitulo++;
  });

  var titulo5: string = this.stars[5]["title"];

  }
  
}
