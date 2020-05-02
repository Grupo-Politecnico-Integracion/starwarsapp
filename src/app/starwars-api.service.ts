import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { films } from './models/film';


@Injectable()

export class StarwarsApiService {

  search: films;
  infoLog;

  constructor(private http: HttpClient) { }

  // Metodo que retorna la api CMS 20.04.2020
  getStarwarsApi() {
    return this.http.get('http://swapi.py4e.com/api/people/?results=100');
  }
  getSearchData(parameter: films){
  	const url_api = 'https://swapi.py4e.com/api/people/?search=${parameter}';
  	//return this.http.get(url_api);
  	this.infoLog = this.http.get(url_api);
  	console.log(this.infoLog);
  }
}
}