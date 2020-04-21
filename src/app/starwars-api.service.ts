import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {

  constructor(protected http: HttpClient) { }
  // Metodo que retorna la api CMS 20.04.2020
  getStarwarsApi() {
    // return this.http.get('http://swapi.py4e.com/api/?results=5'); Comentado para prueba de nuevo link 20.04.2020
    return this.http.get('http://swapi.py4e.com/api/people/?results=100');
  }

}


