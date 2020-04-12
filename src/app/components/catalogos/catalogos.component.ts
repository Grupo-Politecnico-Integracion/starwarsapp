import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {
  peliculas: any[] = []
 

  constructor() { }

  ngOnInit(): void {
    this.peliculas = [
      {
        "id": "1",
        "imagen": "./../assets/images/el-despertar-de-la-fuerza-1575448990.jpg",
        "nombre": "Prueba 1"
      },
      {
        "id": "2",
        "imagen": "./assets/images/at_at.jpg",
        "nombre": "Prueba 2"
      },
      {
        "id": "3",
        "imagen": "./../assets/images/el-despertar-de-la-fuerza-1575448990.jpg",
        "nombre": "Prueba 2"
      },
      {
        "id": "4",
        "imagen": "./../assets/images/el-despertar-de-la-fuerza-1575448990.jpg",
        "nombre": "Prueba 2"
      }
    ];
  }


}
