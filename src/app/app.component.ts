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
}
