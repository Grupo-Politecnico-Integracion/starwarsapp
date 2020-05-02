import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class StarwarsApiService {

  constructor(private http: HttpClient) { }

  // Metodo que retorna la api CMS 20.04.2020
  getStarwarsApi(url: string) {
    
    return this.http.get(url);
    
  }

}




