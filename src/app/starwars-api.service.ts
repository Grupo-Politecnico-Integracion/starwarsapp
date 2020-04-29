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

  datas: Observable<any>;

  constructor(private http: HttpClient) { }

  // Metodo que retorna la api CMS 20.04.2020
  getStarwarsApi() {
    // return this.http.get('http://swapi.py4e.com/api/?results=5'); Comentado para prueba de nuevo link 20.04.2020
    return this.http.get('http://swapi.py4e.com/api/people/?results=100');
  }

  //Metodo consulta
  //Url https://swapi.py4e.com/api/people/?search=

  getSearchData(parameter: string){
  	const url_api = 'https://swapi.py4e.com/api/people/?search=${parameter}';
  	return (this.datas = this.http.get(url_api));
  }
}




