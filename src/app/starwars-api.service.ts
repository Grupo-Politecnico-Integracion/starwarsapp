import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


// Se pasa a revisión porque al parecer no se usa CMS 22.04.2020
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class StarwarsApiService {

  constructor(private http: HttpClient) { }

  // Metodo que retorna la api CMS 20.04.2020
  getStarwarsApi(url: string) {
    // return this.http.get('http://swapi.py4e.com/api/?results=5'); //Comentado para prueba de nuevo link 20.04.2020
    // return this.http.get('http://swapi.py4e.com/api/?results=5'); //Comentado para prueba de nuevo link 20.04.2020
    // return this.http.get('http://swapi.py4e.com/api/people/?results=100');
    return this.http.get(url);
    
  }

}




